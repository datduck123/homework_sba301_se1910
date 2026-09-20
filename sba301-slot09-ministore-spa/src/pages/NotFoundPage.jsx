import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="py-5 text-center my-auto">
      <h1 className="display-3 fw-bold text-danger mb-2">404</h1>
      <h2 className="h3 mb-3 fw-semibold">Page Not Found</h2>
      <p className="text-muted mb-4 col-md-6 mx-auto">
        The requested URL does not match any client route declared in this Single Page Application.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </section>
  );
}
