# MiniStore SPA - SBA301 Slot 09: React Router and Single Page Application (SPA)

## 1. Project Information
- **Course**: SBA301 - Integrate Single Page Application with Spring Boot
- **Slot**: 09 - Chapter 09: React Router and Single Page Application (SPA)
- **Core Stack**: ReactJS (Vite), React Router DOM v6, React-Bootstrap, JavaScript (ES6+).
- **Mental Model**: `URL -> Router -> Route Match -> Layout -> Page Component -> UI`.

## 2. Route Table & Architecture
| URL Pattern | Type | Rendered Layout / View | Parameter / Key Techniques |
| :--- | :--- | :--- | :--- |
| `/` | Index | `MainLayout` -> `HomePage` | Hero banner & SPA exploration |
| `/products` | List | `MainLayout` -> `ProductsPage` | Catalog listing |
| `/products?q=&category=` | Query State | `MainLayout` -> `ProductsPage` | `useSearchParams` URL state synchronization |
| `/products/:id` | Dynamic | `MainLayout` -> `ProductDetailPage` | `useParams` (`id`), `useNavigate(-1)` |
| `/about` | Static | `MainLayout` -> `AboutPage` | Static informational route |
| `/home` | Redirect | `<Navigate to="/" replace />` | Declarative redirect without history leak |
| `/dashboard` | Nested Index | `MainLayout` -> `DashboardLayout` -> `DashboardHome` | Nested route + `<Outlet />` |
| `/dashboard/profile` | Nested Child | `MainLayout` -> `DashboardLayout` -> `ProfilePage` | Relative routing |
| `/dashboard/orders` | Nested Child | `MainLayout` -> `DashboardLayout` -> `OrdersPage` | Relative routing |
| `*` | Wildcard | `MainLayout` -> `NotFoundPage` | Client 404 page handler within shell |

## 3. Directory Structure
```text
sba301-slot09-ministore-spa/
├── public/
│   └── images/
│       └── ministore-placeholder.svg
├── src/
│   ├── components/
│   │   └── AppNavbar.jsx
│   ├── data/
│   │   └── products.js
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   └── DashboardLayout.jsx
│   ├── pages/
│   │   ├── StaticPages.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── styles.css
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

# 2. Run in development mode
npm run dev

# 3. Check production build
npm run build
npm run preview
```

## 5. Key Concept Proofs
1. **URL as State**: The search keyword `q` and selected `category` in `ProductsPage` are persisted directly into the URL query string using `useSearchParams()`. Refreshing or sharing the URL preserves exact filter state without duplicating data in `useState`.
2. **Nested Routes & Outlet**: `DashboardLayout` holds common navigation (`Overview`, `Profile`, `Orders`) while rendering its active sub-route dynamically via `<Outlet />`.
3. **Graceful Not-Found Handling**:
   - Unknown route (`/something-random`): Matched by wildcard `*` rendering `NotFoundPage`.
   - Missing resource (`/products/999`): Handled safely within `ProductDetailPage` displaying an inline alert without crashing.
