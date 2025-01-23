// ... existing code ...
import React, { useState, useEffect } from 'react';
import AudioInputComponent from './AudioInputComponent';
import VisualCanvas from './VisualCanvas';

function App() {
  const [audioUrl, setAudioUrl] = useState(null);
  const [styleConfig, setStyleConfig] = useState(null);

  useEffect(() => {
// ... existing code ...
      const fetchAudioAndStyle = async () => {
        try {
          const response = await fetch('http://localhost:5000/generate_visuals', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }), // Example URL
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const audioData = await response.json();
          console.log("Audio Data:", audioData); // Log the response

          setStyleConfig(audioData.style_config);
          setAudioUrl(audioData.audio_url);


        } catch (error) {
          console.error("Could not fetch audio:", error);
          // Implement user-friendly error message here
        }
      };

      fetchAudioAndStyle();
  }, []);

  const handleGenerateVisuals = async (youtubeUrl) => {
    try {
      const response = await fetch('http://localhost:5000/generate_visuals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ youtube_url: youtubeUrl }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const audioData = await response.json();
      console.log("Audio Data:", audioData);

      setStyleConfig(audioData.style_config);
      setAudioUrl(audioData.audio_url);

    } catch (error) {
      console.error("Could not fetch audio:", error);
      // Implement user-friendly error message here
    }
  };

  return (
    <div>
      <h1>Harmonia AI - MVP v0.1</h1>
      <AudioInputComponent onGenerateVisuals={handleGenerateVisuals} />
      {audioUrl && styleConfig && (
        <VisualCanvas audioUrl={audioUrl} styleConfig={styleConfig} />
      )}
    </div>
  );
}

export default App;
