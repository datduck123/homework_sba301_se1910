import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <section className="py-5">
        <div className="alert alert-warning shadow-sm p-4">
          <h1 className="h4 fw-bold">Product not found</h1>
          <p className="mb-3 text-secondary">
            There is no local product matching id: <strong className="text-danger">{id}</strong>.
          </p>
          <div className="d-flex gap-2">
            <Link to="/products" className="btn btn-primary">
              Back to Products
            </Link>
            <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5">
      <div className="card shadow-sm border-0 overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-100"
          style={{ height: "260px", objectFit: "cover" }}
        />
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="badge bg-primary text-uppercase px-3 py-2">{product.category}</span>
            <span className="text-muted small">Item ID: #{product.id}</span>
          </div>
          <h1 className="h2 fw-bold text-dark mb-2">{product.name}</h1>
          <h2 className="h4 text-danger fw-bold mb-3">
            {product.price.toLocaleString()} VND
          </h2>
          <p className="lead text-secondary mb-4">{product.description}</p>
          <hr />
          <div className="d-flex gap-2">
            <Link to="/products" className="btn btn-primary">
              Back to Products
            </Link>
            <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
              &larr; Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
