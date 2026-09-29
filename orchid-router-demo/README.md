# Orchid Router Demo - SBA301 Slot 10: React Router and Single Page Application (SPA)

## 1. Project Information
- **Course**: SBA301 - Integrate Single Page Application with Spring Boot
- **Slot**: 10 - Chapter 09: React Router and Single Page Application (SPA) - Lab 02 Bridge
- **Core Stack**: ReactJS (Vite), React Router DOM v7.18.0 (declarative APIs), React-Bootstrap 2.10, Bootstrap 5.
- **Mental Model**: `URL -> Router -> route matching -> layout -> page component -> UI`.

## 2. Route Map
| URL | Page / Layout | Concept Demonstrated |
| :--- | :--- | :--- |
| `/` | `MainLayout` -> `HomePage` | Index route, NavLink active (`end`) |
| `/orchids` | `MainLayout` -> `OrchidsPage` | Collection list, `useSearchParams` (`?category=`) |
| `/orchids/:id` | `MainLayout` -> `OrchidDetailPage` | Dynamic route, `useParams`, `useNavigate(-1)`, `useLocation` |
| `/about` | `MainLayout` -> `AboutPage` | Static informational route |
| `/contact` | `MainLayout` -> `ContactPage` | Programmatic navigation (`useNavigate` with replace & state) |
| `/home` | `<Navigate to="/" replace />` | Declarative redirect without duplicate history entry |
| `/dashboard` | `MainLayout` -> `DashboardLayout` -> `DashboardHome` | Nested route layout with `<Outlet />` and index child |
| `/dashboard/favorites` | `MainLayout` -> `DashboardLayout` -> `FavoritesPage` | Nested route child |
| `/dashboard/profile` | `MainLayout` -> `DashboardLayout` -> `ProfilePage` | Nested route child |
| `*` | `MainLayout` -> `NotFoundPage` | Wildcard route (Client 404) |

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

## 4. Verification Checkpoints
- **Back/Forward History**: Navigating between Home -> Orchids -> Orchid Detail allows browser Back (`navigate(-1)`) to traverse history entries properly without full page reload.
- **URL State**: Query parameters (`?category=Vanda`) in `OrchidsPage` are kept directly in the URL via `useSearchParams()`.
- **404 Handling**:
  - Route 404 (`/xyz`): Matched by wildcard `*` rendering `NotFoundPage`.
  - Resource 404 (`/orchids/999`): Handled safely inside `OrchidDetailPage` displaying an alert without crashing.
- **Direct URL**: Refreshing or opening `/orchids/2` in a new tab resolves reliably without dependency on transient `location.state`.
