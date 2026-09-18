import { useState } from "react";
import { Badge, Button, Card, Modal } from "react-bootstrap";

function EventCard({ event }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <Card className="h-100 shadow-sm border-0 transition-hover">
        <Card.Img 
          className="event-image" 
          variant="top" 
          src={event.image} 
          alt={event.title} 
        />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
            <Card.Title className="fs-5 fw-semibold mb-0">{event.title}</Card.Title>
            {event.featured && (
              <Badge bg="warning" text="dark" className="px-2 py-1">
                Featured
              </Badge>
            )}
          </div>
          <Card.Text className="mb-1 text-muted">
            <strong>Category:</strong> <span className="text-dark">{event.category}</span>
          </Card.Text>
          <Card.Text className="mb-1 text-muted">
            <strong>Date:</strong> <span className="text-dark">{event.date}</span>
          </Card.Text>
          <Card.Text className="mb-3 text-muted">
            <strong>Location:</strong> <span className="text-dark">{event.location}</span>
          </Card.Text>
          <Button 
            variant="primary" 
            className="mt-auto w-100" 
            onClick={() => setShowDetail(true)}
          >
            View Detail
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showDetail} onHide={() => setShowDetail(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">{event.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-100 rounded mb-3" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
          </div>
          <p><strong>Category:</strong> <Badge bg="info" className="ms-1">{event.category}</Badge></p>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Available Seats:</strong> {event.seats}</p>
          <hr />
          <p className="mb-0 text-secondary">{event.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetail(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventCard;
