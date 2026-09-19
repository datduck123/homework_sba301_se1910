import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const money = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND"
});

export default function ProductItem({ product, onEdit, onDelete }) {
  return (
    <Card className="h-100 shadow-sm border-0 transition-hover">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-5 fw-semibold mb-1">{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-secondary">
          {product.category}
        </Card.Subtitle>
        <div className="mb-1 text-muted">
          Price: <strong className="text-primary">{money.format(product.price)}</strong>
        </div>
        <div className="mb-3 text-muted">
          Quantity: <strong className="text-dark">{product.quantity}</strong>
        </div>
        <div className="mt-auto d-flex gap-2">
          <Button size="sm" variant="warning" onClick={() => onEdit(product)}>
            Edit
          </Button>
          <Button size="sm" variant="danger" onClick={() => onDelete(product.id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
