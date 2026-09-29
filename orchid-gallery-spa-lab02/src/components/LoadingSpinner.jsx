import { Spinner } from 'react-bootstrap';

export default function LoadingSpinner() {
  return (
    <div className="text-center py-5">
      <Spinner animation="border" variant="primary" role="status" />
      <div className="mt-2 text-secondary fw-semibold">Loading Orchids...</div>
    </div>
  );
}
