import { Badge, Button, Card } from 'react-bootstrap';

export default function OrchidCard({ orchid, onDetail }) {
  return (
    <Card className="orchid-card shadow-sm border-0 transition-hover">
      <Card.Img
        className="orchid-card-img"
        variant="top"
        src={orchid.image}
        alt={orchid.orchidName}
      />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
          <Card.Title className="fs-5 fw-bold mb-0">{orchid.orchidName}</Card.Title>
          {orchid.isSpecial && (
            <Badge bg="warning" text="dark" className="px-2 py-1">
              Special
            </Badge>
          )}
        </div>
        <Card.Text className="text-muted mb-3">
          <strong>Category:</strong> {orchid.category}
        </Card.Text>
        <Button
          className="mt-auto w-100"
          variant="primary"
          onClick={() => onDetail(orchid)}
        >
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
}
