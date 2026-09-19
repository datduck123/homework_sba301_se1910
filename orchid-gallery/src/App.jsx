import AppNavBar from "./components/AppNavBar";
import HeroSection from "./components/HeroSection";
import OrchidList from "./components/OrchidList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavBar />
      <HeroSection />
      <main className="flex-grow-1">
        <OrchidList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
