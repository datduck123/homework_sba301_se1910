# Orchid Gallery SPA - Lab 02 + Slot 9: Fetching & Caching Data

## 1. Project Information

- **Course**: SBA301 - Integrate Single Page Application with Spring Boot
- **Topic**: Lab 02 - Create Single Page Application with ReactJS (Integrating Slot 9: Fetching & Caching Data)
- **Technologies**: ReactJS (Vite), React-Bootstrap 2.10, Bootstrap 5, Fetch API, Axios (Example), Custom Hook, Client-side Caching.

## 2. Data Flow Architecture (Layer A + Layer B)

```text
App.jsx
  └── NavBar.jsx
  └── Orchids.jsx
        └── useOrchids.js (Custom Hook managing loading / error / orchids / reload)
              └── orchidService.js (Data Access Layer + Cache TTL 30s)
                    └── fetch('/orchids.json')
                          └── OrchidCard.jsx (receives props and onDetail callback)
                          └── OrchidDetailModal.jsx (displays details for selectedOrchid)
```

## 3. Directory Structure

```text
orchid-gallery-spa/
├── public/
│   ├── orchids.json                  # HTTP JSON source for Fetch/Axios
│   └── images/
│       └── orchid-placeholder.svg    # Soft peach vector SVG placeholder
├── src/
│   ├── api/
│   │   ├── apiClient.js              # Axios instance configuration
│   │   ├── orchidService.js          # Fetch + Cache TTL 30s + Force reload
│   │   └── orchidService.axios.example.js
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── Orchids.jsx
│   │   ├── OrchidCard.jsx
│   │   ├── OrchidDetailModal.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── ErrorMessage.jsx
│   ├── hooks/
│   │   └── useOrchids.js
│   ├── shared/
│   │   └── ListOfOrchids.js          # Original static data from Lab 02
│   ├── styles/
│   │   └── app.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 4. Technical Verification Checkpoints

- **Layer A (Lab 02 Core)**: Standard responsive navigation bar, grid of 8 orchid cards, clicking "Detail" triggers Modal showing correct details for `selectedOrchid`, safe dismiss via Close button or "X" button.
- **Layer B (Slot 9 Extension)**:
  - Data access decoupled into `orchidService.js` and `useOrchids.js`.
  - Fetch HTTP GET `/orchids.json` with `response.ok` status validation.
  - 30-second TTL Caching mechanism: Within 30 seconds, component remounts or standard calls retrieve from in-memory cache (`[Cache HIT]`). Clicking "Force Reload (Bypass Cache)" passes `force=true` to initiate a fresh network request (`[Cache MISS / FORCE]`).
  - Full 4 UI states supported: `LoadingSpinner` during network wait, `ErrorMessage` with `Try Again` on failure (e.g., 404 test), Empty State when search/filter produces no results, and responsive Card Grid upon data availability.
