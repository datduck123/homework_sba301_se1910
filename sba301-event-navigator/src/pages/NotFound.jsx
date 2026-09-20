import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container className="py-5 text-center my-auto">
      <h1 className="display-3 fw-bold text-danger mb-3">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted mb-4 col-md-6 mx-auto">
        The client route you requested does not match any route pattern in this SPA application.
      </p>
      <Button as={Link} to="/" variant="primary">
        Go Home
      </Button>
    </Container>
  );
}

export default NotFound;
