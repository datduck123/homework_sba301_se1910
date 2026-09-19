# SBA301 - Session 05/40: Integrated React Lab 01 (Orchid Gallery)

## 1. Thông tin dự án
- **Tên dự án**: Orchid Gallery with Components, Props, State & React-Bootstrap
- **Môn học**: SBA301 - Integrate Single Page Application with Spring Boot
- **Session**: Buổi 05 / Session 05 (Integrated React Lab 01)
- **Công nghệ cốt lõi**: ReactJS (Vite), React-Bootstrap, Bootstrap 5, Modern JavaScript (ES6+).

## 2. Cấu trúc thư mục (Target Architecture)
```text
orchid-gallery/
├── public/
│   └── images/
│       └── orchid-placeholder.svg   # Vector SVG nền màu da người nhạt
├── src/
│   ├── components/
│   │   ├── AppNavBar.jsx           # Navbar responsive
│   │   ├── HeroSection.jsx         # Header giới thiệu
│   │   ├── OrchidList.jsx          # Collection mapping
│   │   ├── OrchidCard.jsx          # Item card + local modal state
│   │   └── Footer.jsx              # Footer ứng dụng
│   ├── shared/
│   │   └── OrchidsData.js          # Static data module (8 records)
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 3. Các bước khởi chạy dự án
```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy môi trường Development
npm run dev

# 3. Build kiểm tra Production
npm run build
npm run preview
```

## 4. Báo cáo kiểm tra & Giải thích kiến trúc (Exit Ticket & Verification Gate)
### 4.1 Component Tree & Trách nhiệm
- **App**: Gốc kết hợp các khối giao diện chính (`AppNavBar`, `HeroSection`, `OrchidList`, `Footer`).
- **AppNavBar**: Hiển thị thanh điều hướng (UI placeholder cho đến Slot 06).
- **HeroSection**: Banner giới thiệu bộ sưu tập hoa lan.
- **OrchidList**: Nhập `OrchidsData`, sử dụng `.map()` tạo grid các `OrchidCard`, cung cấp `key={orchid.id}`.
- **OrchidCard**: Nhận prop `orchid`, hiển thị thẻ hoa lan; nắm giữ local state `const [show, setShow] = useState(false)` để điều khiển Modal chi tiết.
- **Footer**: Hiển thị thông tin tác quyền và học phần.

### 4.2 Props vs State Analysis
- **`orchid`**: Là **Prop** do `OrchidList` sở hữu nguồn dữ liệu tĩnh và truyền trực tiếp xuống `OrchidCard`. Thẻ con không được phép sửa đổi (`read-only`).
- **`show`**: Là **Local State** nằm trong từng instance của `OrchidCard`, điều khiển đóng/mở Modal riêng biệt mà không gây re-render toàn bộ danh sách.

### 4.3 Trả lời 5 câu hỏi Exit Ticket (Phụ lục A)
1. **Mắt xích giữa `OrchidsData` và `OrchidCard`**: Là `OrchidList` thông qua phương thức `map()` và truyền prop `orchid={orchid}`.
2. **Vì sao `<OrchidCard orchid={orchid} />` tốt hơn tạo 8 component khác nhau?**: Nguyên lý tái sử dụng (Reusability). Một template duy nhất kết hợp với các data object khác nhau giúp code gọn, dễ bảo trì và mở rộng linh hoạt.
3. **State Flow khi bấm View Detail**:
   ```text
   View Detail Click -> onClick handler -> setShow(true) -> show = true -> Component re-renders -> Modal visible
   ```
4. **Vì sao `OrchidsData.js` không phải database?**: Vì đây là static in-memory JavaScript module phía client, không có tính năng lưu trữ vĩnh viễn (persistence), không chạy qua DBMS hay API server.
5. **Nội dung nào trong buổi là bridge từ Lab 02?**: Cấu trúc chi tiết của Orchid (`origin`, `color`, `rating`, `description`) và tương tác đóng/mở `Modal` chi tiết.
