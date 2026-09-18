import { Button, Container } from 'react-bootstrap';

function HeroSection() {
  return (
    <section id="top" className="hero-section py-5">
      <Container>
        <p className="text-uppercase fw-semibold mb-2 hero-eyebrow">
          SBA301 — Slot 03 Practice
        </p>
        <h1 className="display-5 fw-bold mb-3">
          Explore orchids through<br />component-based UI
        </h1>
        <p className="lead hero-copy mb-4">
          A medium-size React interface built with functional components,
          composition and React-Bootstrap.
        </p>
        <div className="d-flex flex-wrap gap-2">
          <Button href="#gallery" variant="light">View Gallery</Button>
          <Button href="#care" variant="outline-light">Care Tips</Button>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
