import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <Card className="h-100 shadow-sm border-0 transition-hover">
      <Card.Img
        variant="top"
        src={event.image}
        alt={event.title}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="mb-2">
          <Badge bg={event.featured ? "warning" : "secondary"} text={event.featured ? "dark" : "light"}>
            {event.featured ? "Featured" : event.category}
          </Badge>
        </div>
        <Card.Title className="fs-5 fw-semibold mb-2">{event.title}</Card.Title>
        <Card.Text className="mb-1 text-muted">
          <strong>Date:</strong> <span className="text-dark">{event.date}</span>
        </Card.Text>
        <Card.Text className="mb-3 text-muted">
          <strong>Location:</strong> <span className="text-dark">{event.location}</span>
        </Card.Text>
        <Button
          as={Link}
          to={`/events/${event.id}`}
          className="mt-auto w-100"
          variant="primary"
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
