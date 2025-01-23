**Ultimate Detailed Project Document: Harmonia AI (Version 0.1 MVP)**

**1. Project Overview**

*   **1.1. Project Title:** Harmonia AI - Music Reactive Visuals for TikTok (MVP - Version 0.1)
*   **1.2. Project Goal (MVP - Version 0.1):** To create a functional web-based prototype of Harmonia AI that allows users to input audio from YouTube URLs and generate **a single, basic music-reactive visual style.** The primary goal of this MVP is to validate the core audio-visual pipeline and demonstrate basic functionality.
*   **1.3. Value Proposition for TikTok Creators (MVP - Version 0.1 Focus):**
    *   **Core Functionality Validation:**  Demonstrates the fundamental concept of music-reactive visuals from YouTube audio input.
    *   **Foundation for Future Development:** Establishes a technical base for adding more features and styles in later versions.
    *   **No-Code Simplicity (for MVP):**  Users can experience basic music-reactive visuals without any technical or design skills, using just a YouTube URL.
*   **1.4. Target Audience (MVP - Version 0.1 Focus):**  Early adopters and testers interested in the core concept of music-reactive visuals.  Feedback from this initial group will be valuable for future development.  The target audience for the *full product* remains TikTok creators of all skill levels.

**2. Product Requirements (Detailed) - MVP (Version 0.1)**

*   **2.1. Functional Requirements (MVP - Version 0.1):**
    *   **2.1.1. Audio Input - YouTube URL:**
        *   **FR.AUDIO.INPUT.YOUTUBE.1:** User shall be able to input a valid YouTube URL into a designated input field in the web interface.
        *   **FR.AUDIO.INPUT.YOUTUBE.2:** Upon user submission of a YouTube URL, the system shall initiate a process to extract the audio stream from the specified YouTube video.
        *   **FR.AUDIO.INPUT.YOUTUBE.3:** The system shall handle common YouTube URL formats and gracefully handle invalid or inaccessible URLs, providing informative error messages to the user.
        *   **FR.AUDIO.INPUT.YOUTUBE.4:** Audio extraction process should be reasonably fast (target: audio extraction completion within 15 seconds for typical video lengths).
        *   **Acceptance Criteria (for Audio Input):**
            *   **AC.AUDIO.INPUT.1:**  The system shall successfully accept and process valid YouTube URLs in common formats.
            *   **AC.AUDIO.INPUT.2:** The system shall provide an error message for invalid or inaccessible YouTube URLs.
            *   **AC.AUDIO.INPUT.3:** Audio extraction shall initiate within 2 seconds of URL submission.
    *   **2.1.2. Audio Analysis (Javascript Web Audio API - Basic):**
        *   **FR.AUDIO.ANALYSIS.JS.1:** The Javascript frontend shall utilize the Web Audio API to perform real-time analysis of the extracted audio stream.
        *   **FR.AUDIO.ANALYSIS.JS.2:** The audio analysis shall, at a minimum, extract amplitude (volume) data and frequency (spectrum) data from the audio stream.
        *   **FR.AUDIO.ANALYSIS.JS.3:** The audio analysis data shall be updated at a sufficient rate to drive smooth, music-reactive visual animations (target: update rate of at least 30 frames per second).
        *   **Acceptance Criteria (for Audio Analysis):**
            *   **AC.AUDIO.ANALYSIS.1:** The system shall extract real-time amplitude and frequency data from the audio stream using Web Audio API.
            *   **AC.AUDIO.ANALYSIS.2:** The audio analysis data update rate shall be sufficient for smooth visual reactivity (at least 30 updates per second).
    *   **2.1.3. Visual Output - Basic Music-Reactive Visuals:**
        *   **FR.VISUAL.OUTPUT.BASIC.1:** The system shall generate dynamic visuals in a designated WebGL canvas area in the web interface.
        *   **FR.VISUAL.OUTPUT.BASIC.2:** The visuals shall react in real-time to the audio analysis data (amplitude and frequency) extracted from the YouTube audio.
        *   **FR.VISUAL.OUTPUT.BASIC.3:** The initial visual style (MVP) shall consist of simple geometric shapes (circles, squares, triangles - *choose one or a combination for MVP*) that pulsate, change size, and/or change color in response to the audio input.
        *   **FR.VISUAL.OUTPUT.BASIC.4:** The initial visual style shall have a predefined configuration (shape type, color palette, animation parameters - *hardcoded or very simple procedural for MVP*). **Single, predefined style only in MVP v0.1.**
        *   **FR.VISUAL.OUTPUT.BASIC.5:** The visual output should be rendered smoothly at a reasonable frame rate (target: 30 FPS on mid-range desktop).
        *   **Acceptance Criteria (for Visual Output):**
            *   **AC.VISUAL.OUTPUT.1:** The system shall render dynamic visuals in the designated WebGL canvas.
            *   **AC.VISUAL.OUTPUT.2:** The visuals shall react in real-time to changes in audio amplitude and frequency.
            *   **AC.VISUAL.OUTPUT.3:** The visual style shall match the predefined MVP style (e.g., pulsating circles, color change with frequency).
            *   **AC.VISUAL.OUTPUT.4:** Visual rendering shall maintain a minimum frame rate of 30 FPS on a mid-range desktop browser (Chrome, Firefox, or Safari).
    *   **2.1.4. Frontend UI - Minimal MVP Interface:**
        *   **FR.UI.MVP.1:** The web interface shall include a text input field labeled "YouTube URL" for users to paste YouTube video links.
        *   **FR.UI.MVP.2:** The web interface shall include a button labeled "Generate Visuals" to initiate the audio extraction and visual generation process.
        *   **FR.UI.MVP.3:** The web interface shall include a designated canvas area to display the generated music-reactive visuals.
        *   **No Video Export Button in v0.1 MVP.**
        *   **No UI parameter controls or style customization in v0.1.**
        *   **Acceptance Criteria (for Frontend UI):**
            *   **AC.UI.1:** The UI shall display a "YouTube URL" input field.
            *   **AC.UI.2:** The UI shall display a "Generate Visuals" button.
            *   **AC.UI.3:** The UI shall display a WebGL canvas area for visual output.
            *   **AC.UI.4:** The UI elements shall be clearly labeled and functional.
    *   **2.1.5. Backend API - YouTube Audio Extraction and Style Configuration:**
        *   **FR.API.ENDPOINT.AUDIO.YOUTUBE.1:** The Python backend shall expose a REST API endpoint at `/api/audio/youtube` (POST method) to handle YouTube audio extraction requests.
        *   **FR.API.ENDPOINT.AUDIO.YOUTUBE.2:** The API endpoint shall accept a JSON request body containing a `youtube_url` field.
        *   **FR.API.ENDPOINT.AUDIO.YOUTUBE.3:** Upon successful audio extraction, the API endpoint shall respond with the extracted audio file (or a URL to the audio file - *decide implementation detail*).
        *   **FR.API.ENDPOINT.STYLE.INITIAL.1:** The Python backend shall expose a REST API endpoint at `/api/style/initial` (GET method) to serve the **single, initial** visual style configuration.
        *   **FR.API.ENDPOINT.STYLE.INITIAL.2:** The API endpoint shall respond with a JSON object containing parameters defining the **single, initial** visual style.
        *   **Acceptance Criteria (for Backend API):**
            *   **AC.API.AUDIO.YOUTUBE.1:** The `/api/audio/youtube` endpoint shall successfully extract audio from valid YouTube URLs and return an audio file or URL.
            *   **AC.API.AUDIO.YOUTUBE.2:** The `/api/audio/youtube` endpoint shall handle invalid YouTube URLs gracefully and return an appropriate error response.
            *   **AC.API.STYLE.INITIAL.1:** The `/api/style/initial` endpoint shall successfully return a JSON object containing the predefined visual style configuration.

*   **2.2. Non-Functional Requirements (MVP - Version 0.1):**
    *   **2.2.1. Performance:**
        *   **NFR.PERFORMANCE.VISUALS.1:** The visual output should be rendered smoothly, targeting a minimum frame rate of 30 FPS on mid-range desktop computers (Chrome, Firefox, Safari).
        *   **NFR.PERFORMANCE.AUDIO.EXTRACTION.1:** YouTube audio extraction should complete within 15 seconds for typical video lengths.
    *   **2.2.2. Usability:**
        *   **NFR.USABILITY.MVP.1:** The MVP web interface should be intuitive and easy to use for users without prior technical or design experience, given its minimal feature set.
        *   **NFR.USABILITY.MVP.2:** Error messages should be informative and guide users on how to resolve issues.
    *   **2.2.3. Reliability:**
        *   **NFR.RELIABILITY.AUDIO.EXTRACTION.1:** The YouTube audio extraction process should be reliable and handle valid YouTube URLs consistently.
    *   **2.2.4. Compatibility:**
        *   **NFR.COMPATIBILITY.BROWSER.1:** The MVP web application should be compatible with modern versions of major desktop web browsers (Chrome, Firefox, Safari).
        *   **NFR.COMPATIBILITY.MOBILE.1:** Basic functionality should be testable on Chrome Mobile and Safari Mobile browsers, although performance optimization for mobile is not a primary goal for v0.1. **Basic Compatibility Check Required.**
    *   **2.2.5. Security:**
        *   **NFR.SECURITY.BASIC.1:** Basic security considerations should be implemented, such as validating user inputs and preventing common web vulnerabilities (e.g., basic input sanitization). *In-depth security measures will be addressed in later, production-ready versions.*

**3. Technical Design (Detailed) - MVP (Version 0.1) - REVISED**

*   **3.1. Architecture Diagram (Hybrid Javascript Frontend - Python Backend):**

    ```
    +---------------------+      API Request (Style, Audio)       +---------------------+
    | Javascript Frontend | -------------------------------------> | Python Backend API  |
    | (React - Minimal,   | <------------------------------------- | (Flask/FastAPI)       |
    |  WebGL - Three.js)  |      API Response (Style Config, Audio) +---------------------+
    +---------------------+                                          |
          ^                                                            |  Python Logic:
          | User Interaction (UI Events, YouTube URL Input)          |    - YouTube Audio Extraction (`youtube-dl`/`yt-dlp`)
          |                                                            |    - Single Initial Visual Style Configuration (Hardcoded/Procedural)
          | Real-time Audio Data (Web Audio API)                      |
          |                                                            +---------------------+
          | WebGL Rendering Instructions (Three.js)
          +----------------------------------------------------------+
    ```

*   **3.2. Frontend Technology Stack:**
    *   **Language:** Javascript (ES6+)
    *   **UI Framework (Minimal):** React (using functional components and hooks for simplicity).  *Alternative: Plain Javascript/HTML/CSS for even simpler MVP, but React provides better structure for future expansion.*
    *   **WebGL Library:** Three.js (well-established, good documentation, suitable for 2D and basic 3D effects). *Alternative: Babylon.js - equally capable, choose based on personal preference and documentation familiarity for MVP.*
    *   **Audio API:** Web Audio API (for real-time audio analysis and manipulation in the browser).
    *   **Video Recording Library:** **Video Export REMOVED from v0.1 MVP.**
    *   **Build Tool:**  Parcel or Webpack (for bundling Javascript, CSS, and assets - *choose one for MVP simplicity*).

*   **3.3. Backend Technology Stack:**
    *   **Language:** Python 3.x
    *   **API Framework:** FastAPI (modern, asynchronous, performant, and developer-friendly). *Alternative: Flask - simpler for very basic APIs, but FastAPI is recommended for future scalability.*
    *   **YouTube Audio Extraction Library:** `yt-dlp` (actively maintained fork of `youtube-dl`, more robust and feature-rich). *Alternative: `youtube-dl` - if `yt-dlp` has initial setup issues, but `yt-dlp` is generally preferred.*
    *   **Web Server:**  Uvicorn (ASGI server for FastAPI).
    *   **Dependency Management:** pip and virtual environments (standard Python practices).

*   **3.4. API Endpoints (Detailed Specification - As defined in API Specification Document previously).**

*   **3.5. Data Model (MVP - Minimal):**
    *   **Visual Style Configuration (JSON):**  For MVP, the visual style configuration will be represented as a simple JSON object. Example:

        ```json
        {
          "shapeType": "circle",
          "shapeColor": "red",
          "backgroundColor": "white",
          "pulsationAmplitude": 0.5,
          "frequencySensitivity": 0.7
          // ... other visual parameters ...
        }
        ```

        *   *Initially hardcoded in Python code or stored in a simple JSON file on the backend for MVP.*  Database storage for styles and templates will be implemented in later versions.

*   **3.6. Module Breakdown & Component Logic (Frontend):**
    *   **`AudioInputComponent.js` (React):**
        *   **Responsibilities:**
            *   Renders the "YouTube URL" input field and "Generate Visuals" button.
            *   Handles user input for YouTube URL.
            *   On button click, sends a POST request to `/api/audio/youtube` with the YouTube URL.
            *   Handles API responses (success/error) and updates UI accordingly.
    *   **`VisualCanvasComponent.js` (React):**
        *   **Responsibilities:**
            *   Creates and manages the WebGL canvas using Three.js (or Babylon.js).
            *   Initializes the WebGL scene (camera, lights - minimal for MVP).
            *   Fetches the initial visual style configuration from `/api/style/initial` on component mount.
            *   Receives audio analysis data from Web Audio API.
            *   Renders the music-reactive visuals in the WebGL canvas, dynamically updating visual parameters based on audio data and style configuration.
            *   Implements the **single, basic** visual style logic (shape rendering, pulsation, color changes).
    *   **`DownloadButtonComponent.js` (React):**
        *   **Responsibilities:**
            *   **REMOVED for v0.1 MVP.** Placeholder component can be kept but functionality is deferred.
    *   **`App.js` (React - Main Application Component):**
        *   **Responsibilities:**
            *   Sets up the main application layout.
            *   Integrates `AudioInputComponent`, `VisualCanvasComponent`.
            *   Manages overall application state (minimal for MVP).

*   **3.7. Module Breakdown & Logic (Backend - Python):**
    *   **`main.py` (FastAPI Application):**
        *   **Responsibilities:**
            *   Sets up the FastAPI application instance.
            *   Defines API routes and endpoints (`/api/audio/youtube`, `/api/style/initial`).
            *   Handles API request routing and response generation.
            *   Initializes and configures backend services (if any for MVP - likely minimal).
    *   **`audio_extraction.py` (Python Module):**
        *   **Responsibilities:**
            *   Contains functions for extracting audio from YouTube URLs.
            *   Uses `yt-dlp` library to download audio.
            *   Handles potential errors during audio extraction (e.g., invalid URL, download failures).
            *   *For MVP, might temporarily save audio files to disk for serving - more robust streaming or in-memory processing in later versions.*
    *   **`style_config.py` (Python Module):**
        *   **Responsibilities:**
            *   Defines the **single, initial** visual style configuration.
            *   *For MVP, this will likely be hardcoded Python dictionaries/objects or loaded from a simple JSON file.*
            *   Provides functions to retrieve and serve the style configuration via the `/api/style/initial` endpoint.

*   **3.8. Initial WebGL Performance Optimization Strategy (MVP v0.1):**
    *   **Simplified Geometry:**  Use basic geometric primitives (e.g., `THREE.SphereGeometry`, `THREE.BoxGeometry`, `THREE.PlaneGeometry`) with relatively low polygon counts for shapes. Avoid complex or highly detailed 3D models for the MVP visual style.
    *   **Efficient Materials:**  Use standard Three.js materials (e.g., `THREE.MeshBasicMaterial`, `THREE.MeshStandardMaterial`) and keep material properties relatively simple. Avoid overly complex shader-based materials for the initial MVP.
    *   **Limited Visual Effects:** For MVP v0.1, focus on core music reactivity (shape pulsation, color changes) rather than adding computationally expensive visual effects like post-processing, complex particle systems, or ray tracing. Visual effects can be explored in later versions after establishing core performance.
    *   **Instancing (If Applicable):** If the visual style involves rendering many similar shapes, consider using WebGL instancing to reduce draw calls and improve rendering efficiency.  Evaluate if instancing is beneficial for the chosen MVP visual style.
    *   **Frame Rate Monitoring:** Implement basic frame rate monitoring in the Javascript frontend to track performance during development and testing. Use `requestAnimationFrame` for animation loops and measure the time taken per frame to identify potential performance bottlenecks.

**4. Development Plan (Version-by-Version - Detailed) - REVISED**

*   **(Version 0.1 - MVP: YouTube Audio & Basic Visuals) - Detailed Breakdown (5-Week Timeline):**

    *   **Phase 0: Technical Prototyping (Spike) - Week 1:**
        *   Task 0.1: WebGL Performance Spike:
            *   0.1.1: Set up a basic Three.js scene with target shape type (e.g., 1000 circles).
            *   0.1.2: Implement basic animation (e.g., simple scaling animation for circles).
            *   0.1.3: Measure frame rate in Chrome, Firefox, Safari on a mid-range desktop. Record baseline performance.
        *   Task 0.2: YouTube Audio Extraction Spike:
            *   0.2.1: Set up a basic Python backend with FastAPI.
            *   0.2.2: Integrate `yt-dlp` and implement audio extraction for a few test YouTube URLs.
            *   0.2.3: Measure audio extraction time for different video lengths. Test error handling for invalid URLs.
        *   Task 0.3: Basic Audio Reactivity Spike:
            *   0.3.1: In Javascript frontend, use Web Audio API to extract amplitude from a test audio source.
            *   0.3.2: Link circle scale in WebGL scene to the extracted amplitude to create basic pulsation.
            *   0.3.3: Validate real-time audio reactivity pipeline in the browser.
        *   **Deliverable for Phase 0:**  Technical Spike Report summarizing findings, performance measurements, identified risks, and validated approaches for WebGL, audio extraction, and audio reactivity.

    *   **Phase 1: Backend API Development (Python - Week 2):**
        *   Task 1.1: Set up Python backend project structure using FastAPI.
        *   Task 1.2: Implement `/api/audio/youtube` endpoint:
            *   1.2.1:  Receive YouTube URL from request body.
            *   1.2.2:  Integrate `yt-dlp` library for YouTube audio download.
            *   1.2.3:  Implement basic error handling for invalid URLs/download failures.
            *   1.2.4:  *For MVP, temporarily save downloaded audio file to a `static/audio` directory.*
            *   1.2.5:  Return audio file (or URL to static audio file) in API response.
            *   1.2.6: Integration Testing: Test endpoint functionality with `curl` or Postman.
        *   Task 1.3: Implement `/api/style/initial` endpoint:
            *   1.3.1: Define the initial visual style configuration as a Python dictionary in `style_config.py`.
            *   1.3.2: Create `style_config.py` module to load and serve the style configuration.
            *   1.3.3: Implement API endpoint to return the style configuration as JSON.
            *   1.3.4: Integration Testing: Test endpoint functionality with `curl` or Postman.
        *   **Deliverable for Phase 1:** Functional Python Backend API with `/api/audio/youtube` and `/api/style/initial` endpoints, unit tests (if feasible for MVP backend logic).

    *   **Phase 2: Frontend Setup & WebGL Integration (Javascript/React/Three.js - Week 3):**
        *   Task 2.1: Set up Javascript frontend project structure using React and Parcel (or Webpack).
        *   Task 2.2: Install Three.js and Web Audio API related libraries.
        *   
Okay, continuing with the **Version 0.1 - MVP: YouTube Audio & Basic Visuals - Detailed Breakdown (5-Week Timeline)**:

*   **(Version 0.1 - MVP: YouTube Audio & Basic Visuals) - Detailed Breakdown (5-Week Timeline) - Continued:**

    *   **Phase 2: Frontend Setup & WebGL Integration (Javascript/React/Three.js - Week 3) - Continued:**
        *   Task 2.3: Create `VisualCanvasComponent.js`:
            *   2.3.4: Basic Integration Testing:  Ensure the WebGL canvas and shape are rendering correctly in the browser.
        *   Task 2.4: Create `AudioInputComponent.js`:
            *   2.4.1: Implement YouTube URL input field and "Generate Visuals" button using React.
            *   2.4.2: Basic Integration Testing: Ensure the input field and button are rendering correctly in the browser.
        *   Task 2.5: Create `DownloadButtonComponent.js`:
            *   2.5.1: Implement "Download Video" button placeholder (basic rendering in React - functionality deferred).
            *   2.5.2: Basic Integration Testing: Ensure the placeholder button is rendering correctly in the browser.
        *   Task 2.6: Integrate components in `App.js` and set up basic UI layout (minimal HTML structure and CSS for basic positioning).
        *   Task 2.7: End-to-End Integration Testing (Frontend Standalone): Test basic frontend component rendering and layout in the browser, without backend API integration yet.
        *   **Deliverable for Phase 2:** Basic Javascript Frontend setup with React components for UI elements and WebGL canvas rendering a static shape, functional UI layout in the browser.

    *   **Phase 3: Frontend-Backend Integration & Audio Reactivity (Week 4):**
        *   Task 3.1: In `AudioInputComponent.js`, implement API call to `/api/audio/youtube` on "Generate Visuals" button click using `fetch` API.
        *   Task 3.2: Handle API response in `AudioInputComponent.js`:
            *   3.2.1:  On success (200 OK), store audio URL (or audio file data - *decide implementation detail, URL might be simpler for MVP*) in component state.
            *   3.2.2:  On error (4xx, 5xx), display a basic error message in the UI (e.g., below the input field).
            *   3.2.3: Integration Testing: Test API call from frontend, successful and error responses using browser's developer tools (Network tab).
        *   Task 3.3: In `VisualCanvasComponent.js`:
            *   3.3.1: Fetch initial style configuration from `/api/style/initial` on component mount using `fetch` API.
            *   3.3.2: Handle API response for style configuration: store style parameters in component state.
            *   3.3.3: Load audio using Web Audio API and connect to audio source (using the audio URL received from backend, stored in component state).
            *   3.3.4: Implement real-time audio analysis using Web Audio API (amplitude and frequency extraction) within the `VisualCanvasComponent`.
            *   3.3.5: Link visual parameters of the Three.js shape (e.g., circle scale, color) to the extracted audio data, using the style configuration parameters to control the reactivity.
            *   3.3.6: End-to-End Integration Testing: Test full flow - YouTube URL input in UI -> API call to backend -> Audio extraction and serving -> Style config retrieval -> Visual rendering with audio reactivity in browser.
        *   **Deliverable for Phase 3:** Functional integration between Javascript Frontend and Python Backend for audio retrieval and style configuration, basic music-reactive visuals driven by Web Audio API data within the browser.

    *   **Phase 4: MVP Polish & Testing (Week 5):**
        *   **Phase 4a: Initial Performance Optimization (0.5 week):**
            *   4a.1: Review WebGL rendering code in `VisualCanvasComponent.js` for potential performance bottlenecks.
            *   4a.2: Implement basic WebGL performance optimization techniques (as outlined in "Initial WebGL Performance Optimization Strategy" section of TDD) - prioritize geometry simplification and efficient materials.
            *   4a.3: Measure frame rates again after optimization, compare to baseline measurements from Phase 0, ensure target 30 FPS is achievable on mid-range desktop browsers for the MVP visual style.
            *   4a.4: Performance Testing: Run performance tests on Chrome, Firefox, Safari on a mid-range desktop, record frame rates.
        *   **Phase 4b: MVP UI Polish & Error Handling (0.5 week):**
            *   4b.1: Basic UI polish: Add clear labels to input field and button, ensure consistent font and basic styling (minimal CSS).
            *   4b.2: Implement basic frontend error handling: Display user-friendly error messages in the UI for common errors (e.g., invalid YouTube URL, API request failures).
            *   4b.3: Add basic loading indicator (e.g., simple text "Loading...") displayed during audio extraction and style configuration API calls.
            *   4b.4: Usability Testing (Internal):  Basic internal usability testing - run through the user flow yourself, identify any usability issues or confusing elements in the minimal UI.
        *   **Phase 4c: MVP Testing & Bug Fixing (4 days - ~0.8 week):**
            *   4c.1: Functional Testing: Thoroughly test all core MVP functionalities against Acceptance Criteria defined in PRD (Audio Input, Audio Analysis, Visual Output, API Endpoints).
            *   4c.2: Compatibility Testing: Basic compatibility testing on Chrome, Firefox, Safari desktop browsers.
            *   4c.3: Basic Mobile Compatibility Check:  Perform a quick check to ensure the MVP doesn't completely break on Chrome Mobile and Safari Mobile browsers (visuals rendering, UI elements visible - performance not prioritized for v0.1 mobile check).
            *   4c.4: Bug Fixing: Address and fix any identified bugs or issues.
        *   **Phase 4d: Documentation & MVP Release Preparation (1 day - ~0.2 week):**
            *   4d.1: Update technical documentation (TDD) with any implementation details or deviations from the initial plan.
            *   4d.2: Prepare a very basic "README.md" file for the project repository, outlining MVP functionality and basic usage instructions.
            *   4d.3: Prepare for MVP "release" - this might be as simple as deploying the MVP to a basic hosting platform (e.g., Netlify, Vercel) or just having the codebase ready for demonstration.
        *   **Deliverable for Phase 4:** Polished MVP web application with basic UI/UX improvements, initial performance optimization, basic error handling, tested core functionality against Acceptance Criteria, documented codebase, and prepared for MVP release/demonstration.

**5. Key Metrics for MVP Success (Version 0.1) - REVISED:**

*   **Functionality:**
    *   Successful YouTube audio extraction for valid URLs (measured by percentage of successful extractions - target > 95% for valid URLs).
    *   Generation of music-reactive visuals from extracted audio for all tested YouTube URLs.
    *   Core audio-visual pipeline functioning end-to-end without critical errors.
    *   API endpoints functional and responding correctly for all core MVP requests.
*   **Performance:**
    *   Visuals rendering at a sustained frame rate of at least 30 FPS on mid-range desktop computers (Chrome, Firefox, Safari) for the MVP visual style.
    *   YouTube audio extraction completing within 15 seconds for 90% of tested video lengths (target).
*   **Usability (Qualitative - Initial Testing):**
    *   Basic UI elements are functional and clearly labeled.
    *   Error messages are displayed for common errors (e.g., invalid URL) and are somewhat informative.
    *   Overall user flow (YouTube URL input -> Visuals Generation) is understandable and functional, even with the minimal UI.
*   **Technical Stability:**
    *   Application stability during core functionality testing - no major crashes or critical errors during typical MVP usage scenarios.
    *   Codebase is structured and reasonably maintainable for MVP scope.

