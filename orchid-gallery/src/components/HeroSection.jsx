import { Container } from "react-bootstrap";

function HeroSection() {
  return (
    <section id="home" className="py-5 bg-light border-bottom text-center text-md-start">
      <Container>
        <h1 className="display-5 fw-bold" style={{ color: "#86198f" }}>
          Welcome to Orchid Gallery
        </h1>
        <p className="lead mb-0 text-secondary">
          Explore exquisite orchid varieties with distinctive colors, fragrances, and natural origins.
        </p>
      </Container>
    </section>
  );
}

export default HeroSection;
