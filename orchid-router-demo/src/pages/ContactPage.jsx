import { Button, Container, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // Demo only: Programmatic navigation with replace & state
    navigate("/", { replace: true, state: { message: "Contact form submitted successfully." } });
  }

  return (
    <Container className="py-5">
      <Card className="p-4 shadow-sm border-0 bg-white col-md-8 mx-auto">
        <h1 className="fw-bold mb-3">Contact Us</h1>
        <p className="text-secondary mb-4">
          Send us your inquiries or suggestions regarding the Orchid Collection.
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message here..." required />
          </Form.Group>
          <Button type="submit" variant="primary">
            Submit Demo Form
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
