import { Outlet } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";

export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <footer className="border-top py-3 text-center text-muted bg-white mt-auto">
        SBA301 &bull; Orchid Router Demo &bull; Slot 10 React Router SPA
      </footer>
    </div>
  );
}
