import { useState } from "react";
import { Badge, Button, Card, Modal } from "react-bootstrap";

function OrchidCard({ orchid }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="h-100 shadow-sm border-0 transition-hover">
        <Card.Img
          variant="top"
          src={orchid.image}
          alt={orchid.orchidName}
          className="orchid-image"
        />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
            <Card.Title className="fs-5 fw-semibold mb-0">
              {orchid.orchidName}
            </Card.Title>
            {orchid.isSpecial && (
              <Badge bg="warning" text="dark" className="px-2 py-1">
                Special
              </Badge>
            )}
          </div>
          <Card.Text className="mb-1 text-muted">
            <strong>Category:</strong> <span className="text-dark">{orchid.category}</span>
          </Card.Text>
          <Card.Text className="mb-1 text-muted">
            <strong>Origin:</strong> <span className="text-dark">{orchid.origin}</span>
          </Card.Text>
          <Card.Text className="mb-3 text-muted">
            <strong>Rating:</strong> <span className="text-warning fw-bold">&#9733; {orchid.rating}</span>
          </Card.Text>

          <Button
            variant="primary"
            className="mt-auto w-100 btn-orchid"
            onClick={() => setShow(true)}
          >
            View Detail
          </Button>
        </Card.Body>
      </Card>

      {/* Modal Detail (Bridge Task from Lab 02) */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold text-dark">{orchid.orchidName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={orchid.image}
            alt={orchid.orchidName}
            className="img-fluid rounded mb-3 w-100"
            style={{ height: "220px", objectFit: "cover" }}
          />
          <p>
            <strong>Category:</strong> <Badge bg="info" className="ms-1">{orchid.category}</Badge>
          </p>
          {orchid.origin && (
            <p>
              <strong>Origin:</strong> {orchid.origin}
            </p>
          )}
          {orchid.color && (
            <p>
              <strong>Color:</strong> {orchid.color}
            </p>
          )}
          {orchid.rating !== undefined && (
            <p>
              <strong>Rating:</strong> &#9733; {orchid.rating} / 5.0
            </p>
          )}
          {orchid.description && (
            <>
              <hr />
              <p className="mb-0 text-secondary">{orchid.description}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrchidCard;
