import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrchids, deleteOrchid } from "../services/orchidApi";
import { Table, Button, Badge, Alert, Spinner, Card } from "react-bootstrap";

export default function ListOfOrchids() {
  const [orchids, setOrchids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await getOrchids();
      setOrchids(response.data);
      setError("");
    } catch (e) {
      setError(e.message || "Failed to fetch orchids from backend");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm(`Are you sure you want to delete Orchid #${id}?`)) return;
    try {
      await deleteOrchid(id);
      await loadData();
    } catch (e) {
      setError(e.message || "Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" role="status" />
        <p className="mt-2 text-secondary">Loading orchids from server...</p>
      </div>
    );
  }

  return (
    <Card className="shadow-sm border-0 p-4">
      <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
        <div>
          <h2 className="fw-bold mb-0 text-dark">Orchids Collection</h2>
          <small className="text-muted">Total: {orchids.length} orchids</small>
        </div>
        <Link className="btn btn-primary" to="/orchids/new">
          + Create New Orchid
        </Link>
      </div>

      {error && <Alert variant="danger">{error}</Alert>}

      {orchids.length === 0 ? (
        <Alert variant="info" className="text-center py-4">
          No orchids found in database. Click <strong>Create New Orchid</strong> to add one.
        </Alert>
      ) : (
        <Table responsive hover className="align-middle">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Natural</th>
              <th>Attractive</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orchids.map((o) => (
              <tr key={o.orchidId}>
                <td className="fw-semibold">#{o.orchidId}</td>
                <td>
                  <img
                    src={o.orchidURL || "https://via.placeholder.com/50?text=Orchid"}
                    alt={o.orchidName}
                    style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px" }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/50?text=No+Image";
                    }}
                  />
                </td>
                <td className="fw-bold">{o.orchidName}</td>
                <td><Badge bg="secondary">{o.category?.categoryName || "N/A"}</Badge></td>
                <td>
                  <Badge bg={o.isNatural ? "success" : "light"} text={o.isNatural ? "white" : "dark"}>
                    {o.isNatural ? "Natural" : "Hybrid"}
                  </Badge>
                </td>
                <td>
                  <Badge bg={o.isAttractive ? "warning" : "light"} text={o.isAttractive ? "dark" : "dark"}>
                    {o.isAttractive ? "Attractive" : "Normal"}
                  </Badge>
                </td>
                <td className="text-end">
                  <Link className="btn btn-sm btn-outline-warning me-2" to={`/orchids/${o.orchidId}/edit`}>
                    Edit
                  </Link>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(o.orchidId)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Card>
  );
}
