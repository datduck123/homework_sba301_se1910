import { Container, Card } from "react-bootstrap";

export default function AboutPage() {
  return (
    <Container className="py-5">
      <Card className="p-4 shadow-sm border-0 bg-white">
        <h1 className="fw-bold mb-3">About Orchid Gallery</h1>
        <p className="lead text-secondary">
          Slot 10 demonstration project for React Router DOM and Single Page Application (SPA) architecture.
        </p>
        <hr />
        <p className="text-muted mb-0">
          This application bridges Component Architecture from Lab 02 to modern URL-driven client-side navigation without full document reloads.
        </p>
      </Card>
    </Container>
  );
}
