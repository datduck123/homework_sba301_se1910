// App.jsx — Root composition layer.
// This file reads like a UI outline: each line is one named responsibility.
// No JSX implementation details live here.

import AppNavbar     from './components/AppNavbar.jsx';
import HeroSection   from './components/HeroSection.jsx';
import QuickStats    from './components/QuickStats.jsx';
import OrchidGallery from './components/OrchidGallery.jsx';
import CareTips      from './components/CareTips.jsx';
import LearningAlert from './components/LearningAlert.jsx';
import AppFooter     from './components/AppFooter.jsx';

// Component tree:
// App
// ├── AppNavbar      — sticky navigation with anchor links
// ├── HeroSection    — intro banner with CTA buttons
// ├── QuickStats     — 3 overview stat cards
// ├── OrchidGallery  — 6 orchid cards in responsive grid
// ├── CareTips       — 3 care guidance cards
// ├── LearningAlert  — bridge message to Props / Slot 04
// └── AppFooter      — course info and copyright

function App() {
  return (
    <div className="app-shell">
      <AppNavbar />
      <main>
        <HeroSection />
        <QuickStats />
        <OrchidGallery />
        <CareTips />
        <LearningAlert />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
