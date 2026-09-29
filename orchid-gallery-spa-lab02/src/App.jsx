import NavBar from './components/NavBar';
import Orchids from './components/Orchids';

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-grow-1">
        <Orchids />
      </main>
      <footer className="border-top py-3 text-center text-muted bg-white mt-auto">
        SBA301 &bull; Lab 02: Orchid Gallery SPA &bull; Fetching & Caching Data
      </footer>
    </div>
  );
}
