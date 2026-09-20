import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductsPage() {
  const [params, setParams] = useSearchParams();
  const q = (params.get("q") ?? "").toLowerCase();
  const category = params.get("category") ?? "all";

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) &&
      (category === "all" || p.category === category)
  );

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setParams(next);
  };

  return (
    <section className="py-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4 pb-3 border-bottom">
        <div>
          <h1 className="h2 fw-bold mb-1">Products Catalog</h1>
          <p className="text-muted mb-0">
            Showing <strong className="text-primary">{filtered.length}</strong> product(s) (URL State Synced)
          </p>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-8">
          <input
            className="form-control"
            value={params.get("q") ?? ""}
            onChange={(e) => update("q", e.target.value)}
            placeholder="Search product name..."
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={category}
            onChange={(e) => update("category", e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
            <option value="tablet">Tablet</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-5 border rounded bg-white">
          <h4 className="text-muted fw-bold">No matching products</h4>
          <p className="text-muted mb-0">Try adjusting your search keyword or selected category filter.</p>
        </div>
      ) : (
        <div className="row g-4">
          {filtered.map((p) => (
            <div key={p.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 transition-hover">
                <img
                  src={p.image}
                  alt={p.name}
                  className="card-img-top"
                  style={{ height: "160px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge bg-secondary text-uppercase">{p.category}</span>
                  </div>
                  <h5 className="card-title fw-bold mb-1">{p.name}</h5>
                  <p className="card-text text-primary fw-bold mb-3">
                    {p.price.toLocaleString()} VND
                  </p>
                  <Link
                    to={`/products/${p.id}`}
                    className="btn btn-outline-primary mt-auto w-100"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
