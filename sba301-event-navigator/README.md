# Campus Event Navigator - SBA301 Slot 07

## 1. Project Information
- **Course**: SBA301 - Integrate Single Page Application with Spring Boot
- **Slot**: 07 - React Router & Navigation (Routes, Links, Parameters & SPA Navigation)
- **Core Stack**: ReactJS, Vite, React-Bootstrap, React Router DOM v6, JavaScript (ES6+).

## 2. Route Table
| URL Pattern | Type | Rendered View Component | Parameter / Data |
| :--- | :--- | :--- | :--- |
| `/` | Static | `Home` | Hero Banner + CTA button (`useNavigate`) |
| `/events` | Static | `EventsPage` | Static `events` list + filter state |
| `/events/:id` | Dynamic | `EventDetail` | Route param `:id` (`useParams` lookup) |
| `/about` | Static | `About` | Information page |
| `*` | Wildcard | `NotFound` | 404 client route handler |

## 3. Directory Structure
```text
sba301-event-navigator/
├── public/
│   └── images/
│       └── event-navigator-placeholder.svg
├── src/
│   ├── components/
│   │   ├── AppNavbar.jsx
│   │   ├── EventCard.jsx
│   │   └── AppFooter.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── EventsPage.jsx
│   │   ├── EventDetail.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── events.js
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 4. How to Run
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build & preview production
npm run build
npm run preview
```

## 5. Verification Highlights
- **Dynamic Lookup**: Khai báo dynamic route `/events/:id` và dùng `const { id } = useParams()` để trích xuất ID từ URL, đối chiếu với mảng `events.find(item => item.id === id)`.
- **Programmatic Navigation**: Dùng `useNavigate()` cho nút "Explore Events" tại trang Home và nút "Go Back" (`navigate(-1)`) tại trang Detail.
- **Graceful Not-Found Handling**: 
  - Resource not found: Truy cập `/events/999` hiển thị thông báo "Event not found" nhẹ nhàng không crash.
  - Route not found: Truy cập URL tùy ý ngoài khai báo (ví dụ `/abc123`) kích hoạt wildcard route `*` hiển thị trang `NotFound`.
