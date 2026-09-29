import { Button, Container, Card, Badge } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { OrchidsData } from "../data/orchids";

export default function OrchidDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const orchid = OrchidsData.find((item) => item.id === id);

  if (!orchid) {
    return (
      <Container className="py-5">
        <div className="alert alert-warning shadow-sm p-4">
          <h1 className="h4 fw-bold">Orchid not found</h1>
          <p className="text-secondary mb-3">
            The route exists, but resource ID <code>{id}</code> does not match any orchid.
          </p>
          <Button as={Link} to="/orchids" variant="primary">
            Back to Orchids
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div className="mb-3">
        <Button variant="outline-secondary" size="sm" onClick={() => navigate(-1)}>
          &larr; Browser Back
        </Button>
      </div>

      <Card className="border-0 shadow-sm overflow-hidden bg-white">
        <img
          src={orchid.image}
          alt={orchid.orchidName}
          className="detail-image w-100"
          style={{ maxHeight: "360px", objectFit: "cover" }}
        />
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h1 className="h2 fw-bold text-dark mb-0">{orchid.orchidName}</h1>
            {orchid.isSpecial && <Badge bg="warning" text="dark">Special Orchid</Badge>}
          </div>
          <p className="text-primary fw-semibold mb-3">
            Category: <span className="badge bg-secondary">{orchid.category}</span>
          </p>
          <p className="lead text-secondary mb-4">{orchid.description}</p>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">
              Navigation source: <code>{location.state?.from ?? "direct URL / refresh"}</code>
            </small>
            <Button as={Link} to="/orchids" variant="outline-primary" size="sm">
              Back to Collection
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
