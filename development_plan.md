# Harmonia AI - MVP v0.1 - Development Plan (Next Steps)

**Goal:** To achieve a functional MVP (Version 0.1) of Harmonia AI that meets the requirements outlined in `project_statement.md`, focusing on backend integration, core audio-visual pipeline, and basic UI/UX.

**Current Status:**

*   Frontend codebase consolidated in the `frontend` directory. `harmonia_frontend` has been removed.
*   Frontend project is set up using Create React App and includes `three.js`, `dat.gui`, and `OrbitControls`.
*   Basic frontend components (`AudioInputComponent`, `VisualCanvas`, `App`) are in place.
*   Backend (Python/FastAPI) is not yet fully implemented or integrated with the frontend.

**Next Development Phases & Tasks:**

This plan is broken down into logical phases, with actionable tasks within each phase.  Each task should be relatively small and achievable within a reasonable timeframe (e.g., a few hours to a day).

## Phase 1: Backend API Implementation & Testing (Focus: API Functionality)

**Goal:**  Implement and test the core backend API endpoints required for the MVP: `/api/audio/youtube` and `/api/style/initial`.

**Tasks:**

1.  **Task 1.1: Backend Project Setup (Python/FastAPI)**
    *   **Description:** Set up the basic Python backend project structure. This includes:
        *   Creating a project directory for the backend (e.g., `backend`).
        *   Initializing a Python virtual environment (`venv`).
        *   Installing FastAPI, `uvicorn`, `yt-dlp`, and any other necessary backend libraries using `pip install`.
        *   Creating a main application file (e.g., `main.py`).
    *   **Deliverable:** Basic Python backend project structure with virtual environment and dependency installation.

2.  **Task 1.2: Implement `/api/style/initial` Endpoint**
    *   **Description:** Implement the `/api/style/initial` GET endpoint in FastAPI. This endpoint should:
        *   Define the **initial, single visual style configuration** as a Python dictionary or JSON object (as per `project_statement.md`). For MVP, this can be hardcoded or loaded from a simple JSON file.
        *   Create a FastAPI route (`/api/style/initial`) that, when accessed with a GET request, returns this style configuration as a JSON response.
    *   **Deliverable:** Functional `/api/style/initial` endpoint that serves the initial style configuration as JSON.

3.  **Task 1.3: Implement `/api/audio/youtube` Endpoint**
    *   **Description:** Implement the `/api/audio/youtube` POST endpoint in FastAPI. This endpoint should:
        *   Accept a JSON request with a `youtube_url` field.
        *   Use the `yt-dlp` library to extract the audio stream from the provided YouTube URL.
        *   For MVP, **temporarily save the extracted audio file to a `static/audio` directory** within the backend.
        *   Return a JSON response containing the URL to the saved audio file (e.g., `/static/audio/{audio_filename}.mp3`).
        *   Implement basic error handling for invalid URLs or extraction failures, returning appropriate error responses to the frontend.
    *   **Deliverable:** Functional `/api/audio/youtube` endpoint that extracts audio from YouTube URLs and returns a URL to the audio file.

4.  **Task 1.4: Backend API Endpoint Testing (Manual)**
    *   **Description:** Manually test both API endpoints (`/api/style/initial` and `/api/audio/youtube`) using tools like `curl`, Postman, or your web browser.
        *   **`/api/style/initial`:** Verify that it returns the correct style configuration JSON.
        *   **`/api/audio/youtube`:**
            *   Test with valid YouTube URLs and verify that it returns a valid audio file URL.
            *   Test with invalid YouTube URLs and verify that it returns an appropriate error response.
    *   **Deliverable:** Confirmation that both API endpoints are functioning correctly and returning expected responses.

## Phase 2: Frontend-Backend Integration (Focus: Data Flow & Audio Reactivity)

**Goal:** Connect the frontend to the backend API, establish data flow for style configuration and audio URLs, and ensure basic audio-reactive visuals are working.

**Tasks:**

1.  **Task 2.1: Frontend API Endpoint Configuration**
    *   **Description:**  In the `frontend` codebase (specifically in `frontend/src/App.js` and potentially `AudioInputComponent.js`):
        *   Update the `fetch` calls to correctly point to your running backend API endpoints (e.g., `http://localhost:5000/api/style/initial` and `http://localhost:5000/api/audio/youtube`).
        *   Ensure the frontend is sending the YouTube URL in the correct format (JSON body) to the `/api/audio/youtube` endpoint.
    *   **Deliverable:** Frontend code updated to correctly call the backend API endpoints.

2.  **Task 2.2: Fetch Style Configuration in Frontend**
    *   **Description:** In `frontend/src/App.js` (or `VisualCanvas.js` if more appropriate):
        *   Modify the `useEffect` hook that currently fetches style configuration to use the `/api/style/initial` endpoint.
        *   Update the code to correctly handle the JSON response from the `/api/style/initial` endpoint and store the `styleConfig` in the component's state.
    *   **Deliverable:** Frontend successfully fetches and stores the style configuration from the backend API.

3.  **Task 2.3: Fetch Audio URL in Frontend**
    *   **Description:** In `frontend/src/App.js` (or `AudioInputComponent.js`):
        *   Modify the `handleGenerateVisuals` function to make a `fetch` request to the `/api/audio/youtube` endpoint, sending the YouTube URL from the input field.
        *   Update the code to correctly handle the JSON response from the `/api/audio/youtube` endpoint and extract the `audio_url`.
        *   Store the `audio_url` in the component's state and pass it as a prop to the `VisualCanvas` component.
    *   **Deliverable:** Frontend successfully fetches the audio URL from the backend API after user submits a YouTube URL.

4.  **Task 2.4: End-to-End Integration Testing (Basic Audio Reactivity)**
    *   **Description:** Test the complete flow from frontend to backend and back:
        *   Run both the frontend development server and the backend API server.
        *   In the browser, input a valid YouTube URL into the `AudioInputComponent`.
        *   Click "Generate Visuals".
        *   **Verify:**
            *   The frontend sends a request to the backend.
            *   The backend successfully extracts audio and serves the audio URL and style config.
            *   The frontend receives the audio URL and style config.
            *   **Basic music-reactive visuals are rendered in the `VisualCanvas` component, reacting to the audio.** (Focus on verifying *reactivity* at this stage, not necessarily polished visuals).
    *   **Deliverable:** Basic end-to-end functionality confirmed - YouTube URL input -> Audio extraction -> Style config retrieval -> Basic audio-reactive visuals.

## Phase 3: UI/UX Polish & Error Handling (Focus: User Experience)

**Goal:** Improve the user experience of the MVP by adding basic UI polish, loading indicators, and error handling.

**Tasks:**

1.  **Task 3.1: Implement Loading Indicators**
    *   **Description:** Add visual loading indicators to the frontend to provide feedback to the user while waiting for API responses.
        *   Display a "Loading..." message or a spinner while fetching style configuration (`/api/style/initial`).
        *   Display a "Loading audio..." message or spinner while fetching audio from YouTube (`/api/audio/youtube`).
        *   Ensure loading indicators are displayed during the API request and disappear when the response is received.
    *   **Deliverable:** Loading indicators implemented for API requests in the frontend.

2.  **Task 3.2: Implement Basic Frontend Error Handling**
    *   **Description:** Implement basic error handling in the frontend to gracefully handle API errors and provide user-friendly error messages.
        *   If the `/api/audio/youtube` request fails (e.g., invalid URL, backend error), display an error message in the UI (e.g., below the input field) informing the user about the issue.
        *   If the `/api/style/initial` request fails, display a general error message indicating that the style configuration could not be loaded.
    *   **Deliverable:** Basic error handling implemented in the frontend with user-friendly error messages.

3.  **Task 3.3: Basic UI Styling (MVP Minimal)**
    *   **Description:** Apply minimal CSS styling to improve the visual presentation of the UI elements.
        *   Ensure clear labels for the input field and button.
        *   Use consistent fonts and basic color scheme.
        *   Ensure basic layout and spacing are functional and not visually jarring.  (Focus on *functional* styling for MVP, not elaborate design).
    *   **Deliverable:** Basic CSS styling applied to improve the UI's visual clarity and usability.

## Phase 4: MVP Testing & Refinement (Focus: Quality & Stability)

**Goal:** Thoroughly test the MVP against the acceptance criteria defined in `project_statement.md`, address any bugs, and perform basic performance and compatibility checks.

**Tasks:**

1.  **Task 4.1: Functional Testing against Acceptance Criteria**
    *   **Description:** Systematically test all core MVP functionalities against the Acceptance Criteria defined in `project_statement.md` (Section 2.1 Functional Requirements).
        *   **Audio Input (YouTube URL):** Test with various valid and invalid YouTube URLs, verify error handling.
        *   **Audio Analysis (Web Audio API):**  (Implicitly tested through visual reactivity, but observe if visuals react as expected to different audio).
        *   **Visual Output (Basic Music-Reactive Visuals):** Verify visuals are rendered, react to audio, and match the predefined MVP style.
        *   **Frontend UI (Minimal MVP Interface):** Verify UI elements are present, labeled correctly, and functional.
        *   **Backend API Endpoints:** Re-test API endpoints to ensure they are stable and functioning as expected.
    *   **Deliverable:**  Documentation of testing results, identifying any bugs or areas for improvement.

2.  **Task 4.2: Bug Fixing & Code Refinement**
    *   **Description:** Address and fix any bugs or issues identified during functional testing. Refine code as needed for clarity and stability.
    *   **Deliverable:** Bug fixes implemented, code refined for stability and clarity.

3.  **Task 4.3: Basic Performance Testing (Desktop Browsers)**
    *   **Description:** Perform basic performance testing on desktop browsers (Chrome, Firefox, Safari) on a mid-range computer.
        *   **Frame Rate:** Monitor frame rate of the visual rendering. Aim for a minimum of 30 FPS as per `project_statement.md`.
        *   **Audio Extraction Time:**  Observe audio extraction time for typical video lengths. Aim for under 15 seconds as per `project_statement.md`.
    *   **Deliverable:**  Performance testing results documented, identifying any performance bottlenecks.

4.  **Task 4.4: Basic Compatibility Check (Desktop Browsers)**
    *   **Description:** Perform basic compatibility checks on major desktop browsers (Chrome, Firefox, Safari).
        *   Verify that the application loads and functions correctly in each browser.
        *   Check for any browser-specific rendering issues or JavaScript errors.
    *   **Deliverable:** Compatibility check results documented, identifying any browser-specific issues.

5.  **Task 4.5: MVP Release Preparation**
    *   **Description:** Prepare for MVP "release" or demonstration.
        *   Update `README.md` with basic instructions on how to run the MVP locally and its core functionality.
        *   Ensure the codebase is clean and well-commented (especially `VisualCanvas.js`).
        *   Consider basic deployment options (Netlify, Vercel - optional for MVP demonstration, but good to think about).
    *   **Deliverable:** MVP codebase prepared for demonstration, `README.md` updated.

**Timeline:**

*   **Phase 1: Backend API Implementation & Testing:**  [Estimate: 1-2 days]
*   **Phase 2: Frontend-Backend Integration:** [Estimate: 1-2 days]
*   **Phase 3: UI/UX Polish & Error Handling:** [Estimate: 0.5 - 1 day]
*   **Phase 4: MVP Testing & Refinement:** [Estimate: 1-2 days]

**Total Estimated Time for Next Steps: 3.5 - 7 days** (This is a rough estimate and can vary depending on complexity and unforeseen issues).

**Key Metrics for Success (MVP v0.1):**

Refer to the "Key Metrics for MVP Success" section in your `project_statement.md`.  The development and testing in Phase 4 should directly address these metrics.

**This `development_plan.md` provides a structured and traceable roadmap for your next development steps.  As you progress, you can update this document, check off tasks, and refine the plan as needed.**

Let me know if you'd like me to modify or elaborate on any part of this plan!