import { Card, Container } from "react-bootstrap";

function About() {
  return (
    <Container className="py-5">
      <Card className="p-4 shadow-sm border-0">
        <Card.Body>
          <h2 className="fw-bold mb-3">About Campus Event Navigator</h2>
          <p className="lead text-secondary">
            Campus Event Navigator is an SBA301 routing practice application demonstrating client-side Single Page Application (SPA) navigation.
          </p>
          <hr />
          <p>
            Current event records are served directly from a static local JavaScript module (<code>events.js</code>); no backend API request is performed in this slot.
          </p>
          <p className="mb-0 text-muted">
            Designed for FPT University Software Engineering students mastering React Router DOM v6.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
