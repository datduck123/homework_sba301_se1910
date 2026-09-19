# React Hook Product Manager - SBA301 Slot 6

## 1. Course Information
- **Course**: SBA301 - Integrate Single Page Application with Spring Boot
- **Slot**: Slot 6 - Chapter 05: React Hook + Lab 01
- **Target**: Practical implementation of `useState`, `useEffect`, `useContext`, `useRef`, Custom Hooks, Controlled Forms, Immutable Updates, and browser `localStorage` persistence.

## 2. Project Architecture
```text
react-hook-product-manager/
├── public/
│   └── images/
│       └── product-placeholder.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── ProductForm.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductList.jsx
│   │   ├── SearchBox.jsx
│   │   ├── CategoryFilter.jsx
│   │   └── ProductStats.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── data/
│   │   └── initialProducts.js
│   ├── styles/
│   │   └── app.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 3. How to Run
```bash
# 1. Install dependencies
npm install

# 2. Run in development mode
npm run dev

# 3. Check production build
npm run build
npm run preview
```

## 4. Hooks Demonstrated
- **`useState`**: Quản lý form data, validation errors, search term, category filter, active editing product, and auto-dismissing feedback messages.
- **`useEffect`**: Đồng bộ `document.title`, auto-focus DOM element khi component mount, và timer cleanup (`clearTimeout`) cho alert thông báo.
- **`useContext`**: Chia sẻ trạng thái Dark/Light mode toàn ứng dụng thông qua `ThemeContext` và `useTheme` hook.
- **`useRef`**: Tham chiếu trực tiếp đến ô tìm kiếm (`inputRef`) để kích hoạt `.focus()` mà không gây re-render.
- **Custom Hooks**:
  - `useLocalStorage(key, initialValue)`: Tự động đồng bộ hóa state với `window.localStorage`.
  - `useTheme()`: Wrapper an toàn kiểm tra `ThemeContext`.
