import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Container className="py-5 text-center my-auto">
      <h1 className="display-4 fw-bold text-primary mb-3">Orchid Gallery SPA</h1>
      <p className="lead text-secondary mb-4 col-md-8 mx-auto">
        Explore natural orchids through URL-driven client-side navigation. Experience Single Page Application routing, query filtering, and nested layout architecture.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <Button as={Link} to="/orchids" variant="primary" size="lg">
          Browse Orchids
        </Button>
        <Button as={Link} to="/dashboard" variant="outline-secondary" size="lg">
          Dashboard
        </Button>
      </div>
    </Container>
  );
}
