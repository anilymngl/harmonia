# Harmonia AI - MVP v0.1

**Music-Reactive Visuals from YouTube Audio**

## Project Overview

Harmonia AI is a web application that generates dynamic, music-reactive visuals based on audio extracted from YouTube URLs. This is the **Minimum Viable Product (MVP) - Version 0.1**, focused on demonstrating the core audio-visual pipeline and basic functionality.

**MVP v0.1 Goal:** To allow users to input a YouTube URL and see a single, predefined style of music-reactive visuals generated in their browser.

## Key Features (MVP v0.1)

*   **YouTube Audio Input:** Users can input a YouTube URL into the application.
*   **Audio Extraction:** The backend extracts audio from the provided YouTube URL.
*   **Basic Music-Reactive Visuals:**  The frontend uses the Web Audio API to analyze the extracted audio and drive dynamic visuals in a WebGL canvas.
*   **Predefined Visual Style:**  MVP v0.1 features a single, predefined visual style (e.g., pulsating geometric shapes - *[You can specify the style here, e.g., "pulsating circles"]*).
*   **Frontend (React & Three.js):**  Built with React for the user interface and Three.js for 3D graphics and WebGL rendering.
*   **Backend (Python & FastAPI):**  Backend API built with Python and FastAPI to handle audio extraction and serve initial style configuration.

## Technology Stack

*   **Frontend:**
    *   [React](https://reactjs.org/) - JavaScript library for building user interfaces.
    *   [Three.js](https://threejs.org/) - JavaScript 3D library for WebGL rendering.
    *   [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - For audio analysis in the browser.
    *   [dat.GUI](https://github.com/dataarts/dat.gui) - For development UI controls (parameter tweaking).
    *   [OrbitControls](https://threejs.org/examples/#misc_controls_orbit) - Three.js camera controls for scene interaction.
*   **Backend:**
    *   [Python](https://www.python.org/) - Programming language for the backend API.
    *   [FastAPI](https://fastapi.tiangolo.com/) - Modern, fast (high-performance), web framework for building APIs with Python.
    *   [uvicorn](https://www.uvicorn.org/) - ASGI server to run the FastAPI application.
    *   [yt-dlp](https://github.com/yt-dlp/yt-dlp) - YouTube download program used for audio extraction.

## Setup Instructions (Local Development)

Follow these steps to run Harmonia AI MVP v0.1 locally:

**Prerequisites:**

*   [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)) installed for frontend development.
*   [Python 3.7+](https://www.python.org/downloads/) installed for backend development.

**Backend Setup:**

1.  **Navigate to the `backend` directory:**
    ```bash
    cd backend
    ```
    *(If you haven't created a `backend` directory yet, you'll need to create one in the project root)*

2.  **Create a virtual environment:**
    ```bash
    python -m venv venv
    ```

3.  **Activate the virtual environment:**
    *   **On macOS/Linux:**
        ```bash
        source venv/bin/activate
        ```
    *   **On Windows:**
        ```bash
        venv\Scripts\activate
        ```

4.  **Install backend dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
    *(You might need to create a `requirements.txt` file in the `backend` directory listing dependencies like `fastapi`, `uvicorn`, `yt-dlp`)*

5.  **Run the backend server:**
    ```bash
    uvicorn main:app --reload
    ```
    *(Assuming your main FastAPI application file is `main.py` and your FastAPI app instance is named `app`)*
    *   The backend server should now be running at `http://localhost:5000`.

**Frontend Setup:**

1.  **Navigate to the `frontend` directory:**
    ```bash
    cd frontend
    ```

2.  **Install frontend dependencies:**
    ```bash
    npm install  # or yarn install
    ```

3.  **Start the frontend development server:**
    ```bash
    npm start   # or yarn start
    ```
    *   The frontend application should now be running at `http://localhost:3000` (or a similar address).

**Usage Instructions:**

1.  **Open the Harmonia AI web application in your browser:** Go to `http://localhost:3000`.
2.  **Enter a YouTube URL:** In the input field, paste a valid YouTube URL that you want to visualize.
3.  **Click "Generate Visuals":** Press the "Generate Visuals" button.
4.  **Observe the visuals:**  Music-reactive visuals based on the audio from the YouTube video should be rendered in the canvas area.

## Key Metrics for Success (MVP v0.1)

Refer to the "Key Metrics for MVP Success" section in `project_statement.md` for details.  Key metrics include:

*   Successful YouTube audio extraction for valid URLs.
*   Generation of music-reactive visuals.
*   Basic end-to-end functionality without critical errors.
*   Visuals rendering at a reasonable frame rate (target: 30 FPS on desktop).

## Future Development (Beyond MVP v0.1)

Future versions of Harmonia AI are planned to include:

*   More diverse and customizable visual styles.
*   User accounts and style saving.
*   Improved UI/UX and user workflows.
*   Potential for TikTok integration and export features.

## Feedback and Contact

[Optional: Add your contact information or a link to a feedback form if you want to collect user feedback on the MVP.]

---

**This `README.md` provides basic instructions for running the MVP v0.1 locally.  For more detailed information, refer to `project_statement.md` and `development_plan.md`.**