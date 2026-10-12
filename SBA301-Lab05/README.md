# SBA301 - Lab 05: Full-Stack SPA with Spring Boot RESTful API & ReactJS

## 1. Cấu trúc dự án
```text
SBA301-Lab05/
├── .idea/
├── README.md
├── docs/
│
├── backend/
│   └── chapter15api/
│       ├── pom.xml
│       ├── mvnw.cmd                     # Chạy .\mvnw.cmd spring-boot:run
│       ├── mvnw                         # Chạy ./mvnw spring-boot:run
│       └── src/main/
│           ├── java/fu/se/chapter15api/
│           │   ├── Chapter15apiApplication.java
│           │   ├── configs/CorsConfig.java
│           │   ├── controllers/OrchidController.java
│           │   ├── pojos/Orchid.java
│           │   ├── repositories/IOrchidRepository.java
│           │   └── services/
│           │       ├── IOrchidService.java
│           │       └── OrchidService.java
│           └── resources/application.properties
│
└── frontend/
    └── chapter15reactjs/
        ├── .env                         # VITE_API_URL=http://localhost:8080/orchids
        ├── package.json
        ├── vite.config.js
        └── src/
            ├── main.jsx
            ├── App.jsx
            ├── services/orchidApi.js
            └── components/
                ├── NavBar.jsx
                ├── ListOfOrchids.jsx
                └── EditOrchid.jsx
```

## 2. Hướng dẫn khởi chạy

### Backend (Spring Boot):
Yêu cầu SQL Server đang chạy database `OrchidDB`.
```bash
cd backend/chapter15api
.\mvnw.cmd spring-boot:run
```
*(Nếu trên Linux/macOS: `./mvnw spring-boot:run` hoặc `mvn spring-boot:run`)*.
Backend lắng nghe tại: `http://localhost:8080/orchids`.

### Frontend (React / Vite):
```bash
cd frontend/chapter15reactjs
npm install
npm run dev
```
Truy cập: `http://localhost:5173`.
