# SBA301 Slot 8 - Product REST API Design and Inspection Kit

## 1. Scope & Objectives
- Practice Client-Server architecture, HTTP methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`), status codes (`200`, `201`, `204`, `400`, `404`), HTTP request/response headers, and raw JSON.
- Tooling: `json-server` (local mock backend), Postman, Chrome/Edge DevTools, Node.js scripts.
- **Scope limitation**: Does not include frontend React Fetch/Axios or real Spring Boot backend (reserved for Slot 09+).

## 2. Requirements
- Node.js 21 or LTS
- npm
- Postman Desktop or extension
- Browser DevTools

## 3. Directory Structure
```text
slot8-product-rest-api-lab/
├── docs/
│   └── api-contract.md             # Standard REST API Contract
├── evidence/
│   ├── devtools/                   # Network tab inspection evidence
│   └── postman/                    # Postman request/response screenshots
├── scripts/
│   ├── parse-json-demo.js          # Demo JSON.parse() and JSON.stringify()
│   └── reset-db.js                 # Reset db.json from db.seed.json
├── public/
│   └── images/
│       └── api-inspection-placeholder.svg
├── db.json                         # Working mock database
├── db.seed.json                    # Immutable golden seed data
├── postman_collection.json         # Ready-to-import Postman Collection
├── package.json
└── README.md
```

## 4. How to Run
```bash
# 1. Install dependencies (json-server@0.17.4)
npm install

# 2. Run JSON demonstration script
npm run json-demo

# 3. Start Mock REST API Server (Port 3001)
npm run api

# 4. Reset Mock Database after destructive testing (POST/PUT/PATCH/DELETE)
# (Stop server with Ctrl+C first, then run)
npm run reset-db
npm run api
```

## 5. Required Inspection Tests (Postman & DevTools)
1. `GET /products` -> `200 OK` (Array of 4 products)
2. `GET /products/1` -> `200 OK` (Single product object)
3. `GET /products/999999` -> `404 Not Found` (Resource not found verification)
4. `POST /products` + JSON Body -> `201 Created` (Server generates ID)
5. `PUT /products/1` + Full JSON Body -> `200 OK` (Complete resource replacement)
6. `PATCH /products/1` + Partial JSON Body -> `200 OK` (Partial update)
7. `DELETE /products/4` -> `200 OK` / `204 No Content` (Verify missing via subsequent GET)

Import `postman_collection.json` into Postman to execute all 7 tests directly!
