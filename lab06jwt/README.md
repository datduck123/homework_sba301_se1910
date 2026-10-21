# SBA301 Lab 06 - Secure REST Services with Spring Boot using JWT

## 1. Giới thiệu dự án
Dự án hoàn thiện **Lab 06** môn học **SBA301** (Integrate Single Page Application with Spring Boot):
- **Công nghệ**: Java 21, Spring Boot 3.3.4, Spring Security 6, JJWT 0.12.6, Spring Data JPA, MS SQL Server.
- **Tính năng**:
  - Đăng ký tài khoản (`POST /auth/signup`) mã hóa mật khẩu một chiều bằng BCrypt.
  - Đăng nhập xác thực (`POST /auth/login`) sinh JSON Web Token (JWT) và thời gian sống (TTL).
  - Bảo vệ Endpoint cá nhân (`GET /users/me`) và danh sách (`GET /users`) thông qua `JwtAuthenticationFilter`.
  - Tách biệt tuyệt đối dữ liệu nhạy cảm bằng DTO Response, không bao giờ lộ password hash ra ngoài.

## 2. Cấu trúc thư mục
```text
lab06jwt/
├── docs/
│   └── postman_collection.json
├── evidence/
│   ├── console/
│   ├── postman/
│   └── sqlserver/
├── src/
│   ├── main/
│   │   ├── java/fu/se/lab06jwt/
│   │   │   ├── configurations/
│   │   │   │   ├── ApplicationConfiguration.java
│   │   │   │   ├── JwtAuthenticationFilter.java
│   │   │   │   └── SecurityConfiguration.java
│   │   │   ├── controllers/
│   │   │   │   ├── AuthenticationController.java
│   │   │   │   └── UserController.java
│   │   │   ├── dtos/
│   │   │   │   ├── LoginUserDto.java
│   │   │   │   └── RegisterUserDto.java
│   │   │   ├── entities/
│   │   │   │   └── User.java
│   │   │   ├── exceptions/
│   │   │   │   └── GlobalExceptionHandler.java
│   │   │   ├── repositories/
│   │   │   │   └── UserRepository.java
│   │   │   ├── responses/
│   │   │   │   ├── LoginResponse.java
│   │   │   │   └── UserResponse.java
│   │   │   ├── services/
│   │   │   │   ├── AuthenticationService.java
│   │   │   │   ├── JwtService.java
│   │   │   │   └── UserService.java
│   │   │   └── Lab06JwtApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/java/fu/se/lab06jwt/SecurityContractTest.java
├── pom.xml
├── seed.sql
├── mvnw.cmd
├── mvnw
└── README.md
```

## 3. Hướng dẫn khởi chạy

### Bước 1: Khởi tạo database trên SQL Server
Mở SSMS và chạy script `seed.sql`:
```sql
USE master;
GO
CREATE DATABASE OrchidJWTLab;
GO
```

### Bước 2: Cấu hình thông tin kết nối
Mở file `src/main/resources/application.properties` và sửa thông tin user/password:
```properties
spring.datasource.username=sa
spring.datasource.password=YOUR_PASSWORD
```

### Bước 3: Chạy ứng dụng
Mở Terminal tại thư mục dự án và chạy:
```powershell
.\mvnw.cmd spring-boot:run
# hoặc nếu đã có maven toàn cục
mvn spring-boot:run
```
Ứng dụng sẽ lắng nghe tại cổng `http://localhost:8005`.

### Bước 4: Kiểm thử bằng Postman
1. Import file `docs/postman_collection.json` vào Postman.
2. Chạy `01. POST Signup` để tạo tài khoản mới.
3. Chạy `03. POST Login`, script test sẽ tự động lưu token vào biến `{{token}}`.
4. Chạy `05. GET /users/me` kèm Bearer token để kiểm tra lấy thông tin cá nhân.
