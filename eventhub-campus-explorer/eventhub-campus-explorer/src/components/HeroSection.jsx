import { Container } from "react-bootstrap";

function HeroSection() {
  return (
    <section id="top" className="py-5 bg-light border-bottom text-center text-md-start">
      <Container>
        <h1 className="display-5 fw-bold text-primary">Discover Campus Events</h1>
        <p className="lead mb-0 text-secondary">
          Explore technology, career, community, sports and cultural activities happening across university campus.
        </p>
      </Container>
    </section>
  );
}

export default HeroSection;
