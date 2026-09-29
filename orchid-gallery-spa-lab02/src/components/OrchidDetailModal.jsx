import { Badge, Button, Modal } from "react-bootstrap";

export default function OrchidDetailModal({ show, orchid, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold text-dark">
          {orchid?.orchidName ?? "Orchid detail"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {orchid ? (
          <>
            <img
              src={orchid.image}
              alt={orchid.orchidName}
              className="img-fluid rounded mb-3 w-100"
              style={{ maxHeight: "250px", objectFit: "cover" }}
            />
            <p>
              <strong>Category:</strong>{" "}
              <Badge bg="info" className="ms-1">
                {orchid.category}
              </Badge>
            </p>
            <p>
              <strong>Origin:</strong> {orchid.origin}
            </p>
            <p>
              <strong>Color:</strong> {orchid.color}
            </p>
            <p>
              <strong>Rating:</strong> &#9733; {orchid.rating} / 5.0
            </p>
            <p>
              <strong>Special:</strong>{" "}
              {orchid.isSpecial ? (
                <Badge bg="warning" text="dark">
                  Yes
                </Badge>
              ) : (
                "No"
              )}
            </p>
            <hr />
            <p className="mb-0 text-secondary">{orchid.description}</p>
          </>
        ) : (
          <p className="text-muted mb-0">No orchid selected.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
