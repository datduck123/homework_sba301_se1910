import { Alert, Badge, Button, Card, Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { events } from "../data/events";

function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((item) => item.id === id);

  if (!event) {
    return (
      <Container className="py-5">
        <Alert variant="warning" className="shadow-sm">
          <Alert.Heading className="fw-bold">Event not found</Alert.Heading>
          <p className="mb-3">
            No local event has id: <strong className="text-danger">{id}</strong>.
          </p>
          <div className="d-flex gap-2">
            <Button as={Link} to="/events" variant="primary">
              Back to Events
            </Button>
            <Button variant="outline-secondary" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </div>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Card className="shadow-sm border-0">
        <Card.Img
          variant="top"
          src={event.image}
          alt={event.title}
          style={{ height: "260px", objectFit: "cover" }}
        />
        <Card.Body className="p-4">
          <div className="mb-3 d-flex gap-2 align-items-center">
            <Badge bg={event.featured ? "warning" : "secondary"} text={event.featured ? "dark" : "light"}>
              {event.category}
            </Badge>
            {event.featured && <Badge bg="success">Featured Event</Badge>}
          </div>
          <Card.Title as="h2" className="fw-bold mb-3">{event.title}</Card.Title>
          <Card.Text className="lead text-secondary mb-4">{event.description}</Card.Text>
          <hr />
          <div className="row g-3 text-muted mb-4">
            <div className="col-sm-6">
              <p className="mb-1"><strong>Date:</strong> <span className="text-dark">{event.date}</span></p>
              <p className="mb-1"><strong>Location:</strong> <span className="text-dark">{event.location}</span></p>
            </div>
            <div className="col-sm-6">
              <p className="mb-1"><strong>Organizer:</strong> <span className="text-dark">{event.organizer}</span></p>
              <p className="mb-1"><strong>Seats Available:</strong> <span className="text-dark">{event.seats}</span></p>
            </div>
          </div>
          <div className="d-flex gap-2">
            <Button as={Link} to="/events" variant="primary">
              Back to Events
            </Button>
            <Button variant="outline-secondary" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EventDetail;
