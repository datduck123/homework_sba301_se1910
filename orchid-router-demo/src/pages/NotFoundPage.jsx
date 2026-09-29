import { Button, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function NotFoundPage() {
  const location = useLocation();

  return (
    <Container className="py-5 text-center my-auto">
      <h1 className="display-3 fw-bold text-danger mb-2">404</h1>
      <h2 className="h3 mb-3 fw-semibold">Route Not Found</h2>
      <p className="text-muted mb-4">
        No client route matches <code>{location.pathname}</code>.
      </p>
      <Button as={Link} to="/" variant="primary">
        Go Home
      </Button>
    </Container>
  );
}
