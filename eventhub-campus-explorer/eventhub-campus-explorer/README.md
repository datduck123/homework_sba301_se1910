# SBA301 - Slot 05 Reinforcement Project: EventHub

## 1. Thông tin dự án
- **Đề tài**: EventHub - Campus Event Explorer
- **Môn học**: SBA301 - Integrate Single Page Application with Spring Boot
- **Slot**: Slot 05 - Integrated React Lab 01 (Reinforcement Project)
- **Công nghệ**: ReactJS (Vite), React-Bootstrap, Bootstrap 5, Modern JavaScript (ES6+).

## 2. Cấu trúc thư mục (Target Architecture)
```text
eventhub-campus-explorer/
├── public/
│   └── images/
│       └── event-placeholder.svg
├── src/
│   ├── components/
│   │   ├── AppNavbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── EventList.jsx
│   │   ├── EventCard.jsx
│   │   └── AppFooter.jsx
│   ├── data/
│   │   └── events.js
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

# 2. Chạy ở môi trường Development
npm run dev

# 3. Build kiểm tra Production
npm run build
npm run preview
```

## 4. Báo cáo kiểm tra & Minh chứng (Evidence / Verification)
### 4.1 Component Tree & Trách nhiệm
- **App**: Root component gom toàn bộ layout (AppNavbar, HeroSection, EventList, AppFooter).
- **AppNavbar**: Hiển thị thanh điều hướng (UI placeholder).
- **HeroSection**: Banner giới thiệu sự kiện trường.
- **EventList**: Quản lý State bộ lọc (`searchText`, `category`, `featuredOnly`), tính toán danh sách dẫn xuất (`filteredEvents`), render danh sách qua `.map()`.
- **EventCard**: Nhận prop `event`, hiển thị thẻ sự kiện, quản lý local state `showDetail` để bật/tắt React-Bootstrap `Modal`.
- **AppFooter**: Chân trang bản quyền và thông tin môn học.

### 4.2 Props vs State Analysis
| Tên biến | Loại | Component sở hữu | Lý do |
| :--- | :--- | :--- | :--- |
| `event` | Prop | `EventList` truyền vào `EventCard` | Thẻ con nhận data để render, không được mutate |
| `searchText` | State | `EventList` | Giá trị người dùng nhập vào ô tìm kiếm |
| `category` | State | `EventList` | Giá trị người dùng chọn dropdown |
| `featuredOnly` | State | `EventList` | Toggle switch bật/tắt lọc Featured |
| `filteredEvents` | Derived Value | `EventList` | Tính toán trực tiếp từ `events.filter(...)`, không tạo thêm state |
| `showDetail` | Local State | `EventCard` | Mỗi thẻ độc lập tự quản lý trạng thái mở/đóng Modal của mình |

### 4.3 15 Câu hỏi Human Verification Gate (Tóm tắt đáp án cốt lõi)
1. **Vì sao `events.js` không phải database?**: Vì đây là static in-memory JavaScript module, không có persistence, không chạy qua DBMS hay API server.
2. **`map()` là gì và vì sao không phải Hook?**: `map()` là built-in Array method của JavaScript; không tuân theo Rules of Hooks (không bắt đầu bằng `use`).
3. **Tại sao dùng `key={event.id}`?**: Giúp React reconciliation nhận diện danh tính ổn định của từng DOM subtree khi render danh sách, tránh re-render sai.
4. **`event` là Prop hay State? Ai sở hữu?**: Là Prop, do `EventList` sở hữu và truyền xuống; `EventCard` là receiver.
5. **Tại sao child không nên sửa `event.title` trực tiếp?**: Vi phạm nguyên tắc One-way Data Flow (Unidirectional) của React.
6. **`searchText` là Prop hay State?**: State của `EventList` vì thay đổi theo tương tác gõ phím của người dùng.
7. **`filteredEvents` có cần `useState` không?**: Không, vì là Derived State được tính toán trực tiếp từ `events` và các filter states trong mỗi lần render.
8. **Mô tả luồng Click View Detail**: Click Button -> trigger handler `setShowDetail(true)` -> React trigger re-render `EventCard` -> Modal có `show={true}` hiển thị.
9. **Tại sao Context không bắt buộc?**: Cây component chỉ sâu 1 cấp (`EventList -> EventCard`), không có hiện tượng prop drilling nghiêm trọng.
10. **Khác nhau giữa Bootstrap CSS và React-Bootstrap**: `react-bootstrap` cung cấp React component wrappers; `bootstrap` cung cấp mã CSS stylesheet hiển thị.
11. **Terminal vs Browser Console evidence**: Terminal cho biết kết quả build/compile của Vite; Browser Console cho biết runtime execution và React warnings.
12. **Phân biệt bug và empty state**: Empty state có điều kiện render rõ ràng khi `filteredEvents.length === 0` và hiển thị UI thông báo thân thiện; bug là crash hoặc trắng trang.
13. **Tại sao cần test 1 EventCard trước khi map?**: Đảm bảo component con nhận đúng props schema và render không lỗi trước khi nhân bản collection.
14. **Production build khác dev server thế nào?**: Production build (`npm run build`) kiểm tra tối ưu hóa bundler, tree shaking, minification và cú pháp chặt chẽ hơn dev server.
15. **Slot 06 sẽ giải quyết gì cho `Nav.Link`?**: Thay thế anchor tag bằng React Router (`Routes`, `Route`, `Link`, `NavLink`) để chuyển trang SPA thật không reload.
