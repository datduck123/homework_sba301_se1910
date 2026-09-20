import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <section className="py-5 text-center my-auto">
      <h1 className="display-4 fw-bold text-primary mb-3">MiniStore SPA</h1>
      <p className="lead text-secondary mb-4 col-md-8 mx-auto">
        Complete React Router & Single Page Application (SPA) architecture demo for SBA301.
        Experience client-side routing, URL state synchronization with query parameters, and nested layouts.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/products" className="btn btn-primary btn-lg">
          Explore Products
        </Link>
        <Link to="/dashboard" className="btn btn-outline-secondary btn-lg">
          Open Dashboard
        </Link>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <section className="py-4">
      <div className="card p-4 shadow-sm border-0 bg-white">
        <h1 className="h2 fw-bold mb-3">About MiniStore SPA</h1>
        <p className="lead text-secondary">
          Route-driven React architecture demonstrating single-page navigation without full page reloads.
        </p>
        <hr />
        <p className="text-muted">
          All catalog data is maintained as an in-memory client collection for routing clarity; deep linking directly integrates with URL parameters and query strings.
        </p>
      </div>
    </section>
  );
}
