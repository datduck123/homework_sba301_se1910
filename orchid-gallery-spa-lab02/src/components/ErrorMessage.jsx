import { Alert, Button } from "react-bootstrap";

export default function ErrorMessage({ message, onRetry }) {
  return (
    <Alert variant="danger" className="my-4 shadow-sm">
      <Alert.Heading className="fw-bold">Failed to Load Data</Alert.Heading>
      <p className="mb-3">{message}</p>
      {onRetry && (
        <Button variant="outline-danger" size="sm" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </Alert>
  );
}
