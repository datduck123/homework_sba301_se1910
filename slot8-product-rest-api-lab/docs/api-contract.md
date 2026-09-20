# Product REST API Contract - SBA301 Slot 08

**Base URL**: `http://localhost:3001`  
**Protocol**: HTTP/1.1  
**Content-Type**: `application/json`

---

## 1. Endpoints Specification

| Method | Endpoint | Description | Request Body | Success Response | Expected Status Code |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GET** | `/products` | Lấy danh sách toàn bộ sản phẩm | *None* | `Product[]` (JSON Array) | `200 OK` |
| **GET** | `/products/{id}` | Lấy chi tiết một sản phẩm theo ID | *None* | `Product` (JSON Object) | `200 OK` (hoặc `404 Not Found` nếu không tìm thấy) |
| **POST** | `/products` | Thêm sản phẩm mới vào danh mục | `ProductCreateDTO` (JSON) | `Product` (kèm ID tự sinh) | `201 Created` |
| **PUT** | `/products/{id}` | Cập nhật toàn bộ bản ghi sản phẩm | `Product` (đầy đủ các trường) | `Product` (đã cập nhật) | `200 OK` |
| **PATCH** | `/products/{id}` | Cập nhật một hoặc vài trường | `Partial<Product>` | `Product` (sau khi merge) | `200 OK` |
| **DELETE** | `/products/{id}` | Xóa bản ghi sản phẩm khỏi server | *None* | `{}` / *None* | `200 OK` hoặc `204 No Content` |

---

## 2. Product Schema
```json
{
  "id": 1,
  "name": "string (Required)",
  "category": "string (Required)",
  "price": "number > 0",
  "quantity": "integer >= 0",
  "active": "boolean"
}
```

---

## 3. Error Observations & Edge Cases
1. **Resource ID không tồn tại** (`GET /products/999999`):
   - Server trả về mã phản hồi `404 Not Found` với body `{}`.
2. **JSON Body sai cú pháp** (`POST /products` với thiếu dấu ngoặc kép hoặc trailing comma):
   - Client/Server báo lỗi parse JSON (`SyntaxError`), không tạo được bản ghi.
3. **Server không chạy (Connection Refused)**:
   - Client nhận thông báo lỗi Network ở tầng Transport/TCP (ví dụ `ERR_CONNECTION_REFUSED`), đây là lỗi mạng chứ **không phải mã trạng thái HTTP** do server trả về.
