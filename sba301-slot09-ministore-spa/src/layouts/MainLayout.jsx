import { Outlet } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";

export default function MainLayout() {
  return (
    <div className="app-shell">
      <AppNavbar />
      <main className="container app-main">
        <Outlet />
      </main>
      <footer className="footer">
        SBA301 &bull; MiniStore SPA &bull; React Router & SPA Demo
      </footer>
    </div>
  );
}
