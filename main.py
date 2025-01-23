from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import yt_dlp
import os
from pathlib import Path

app = FastAPI()

# Create static/audio directory if it doesn't exist
STATIC_DIR = Path("static/audio")
STATIC_DIR.mkdir(parents=True, exist_ok=True)

class YouTubeURL(BaseModel):
    url: str

@app.post("/api/audio/youtube")
async def extract_audio(youtube_url: YouTubeURL):
    try:
        # Configure yt-dlp options
        ydl_opts = {
            'format': 'bestaudio/best',
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': '192',
            }],
            'outtmpl': str(STATIC_DIR / '%(id)s.%(ext)s'),
        }
        
        # Download audio using yt-dlp
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(youtube_url.url, download=True)
            audio_path = str(STATIC_DIR / f"{info['id']}.mp3")
            
        return {"audio_url": f"/static/audio/{info['id']}.mp3"}
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/api/style/initial")
async def get_initial_style():
    # Initial visual style configuration based on test.py parameters
    return {
        "shapeType": "circle",
        "particleCount": 200,
        "trailLength": 50,
        "fieldResolution": 20,
        "audioBlockSize": 1024,
        "sampleRate": 44100,
        "fftBins": 64,
        "audioSmoothing": 0.7,
        "baseRadius": 15,
        "colorHue": 0.0,
        "colorSaturation": 0.8,
        "colorValue": 0.9
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
