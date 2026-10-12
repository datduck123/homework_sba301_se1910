import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createOrchid, getOrchid, updateOrchid } from "../services/orchidApi";
import { getCategories } from "../services/categoryApi";
import { Card, Form, Button, Alert, Row, Col } from "react-bootstrap";

const emptyForm = {
  orchidName: "",
  isNatural: false,
  orchidDescription: "",
  category: null,
  isAttractive: false,
  orchidURL: ""
};

export default function EditOrchid({ createMode = false }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategories()
      .then((r) => {
        console.log("Categories response:", r);
        console.log("Categories data:", r.data);
        setCategories(r.data);
      })
      .catch((e) => console.error("Failed to load categories", e));
  }, []);

  useEffect(() => {
    if (!createMode && id) {
      setLoading(true);
      getOrchid(id)
        .then((r) => {
          setForm({
            orchidName: r.data.orchidName || "",
            isNatural: Boolean(r.data.isNatural),
            orchidDescription: r.data.orchidDescription || "",
            category: r.data.category || null,
            isAttractive: Boolean(r.data.isAttractive),
            orchidURL: r.data.orchidURL || ""
          });
        })
        .catch((e) => setError(e.message || "Failed to load orchid details"))
        .finally(() => setLoading(false));
    } else {
      setForm(emptyForm);
    }
  }, [createMode, id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "category") {
      const selectedCategory = categories.find(c => String(c.categoryId) === String(value)) || null;
      setForm((f) => ({ ...f, category: selectedCategory }));
    } else {
      setForm((f) => ({
        ...f,
        [name]: type === "checkbox" ? checked : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (createMode) {
        await createOrchid(form);
      } else {
        await updateOrchid(id, form);
      }
      navigate("/");
    } catch (e) {
      setError(e.message || "Failed to save orchid");
    }
  };

  return (
    <Card className="shadow-sm border-0 p-4 col-md-8 mx-auto">
      <Card.Body>
        <h2 className="fw-bold mb-4 text-primary">
          {createMode ? "Create New Orchid" : `Edit Orchid #${id}`}
        </h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Orchid Name *</Form.Label>
            <Form.Control
              name="orchidName"
              value={form.orchidName}
              onChange={handleChange}
              placeholder="e.g. Ceasar 4N, Taichung Beauty..."
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Category</Form.Label>
            <Form.Select
              name="category"
              value={form.category?.categoryId || ""}
              onChange={handleChange}
            >
              <option value="">Select a category...</option>
              {categories && categories.length > 0 ? (
                categories.map((cat) => (
                  <option key={cat.categoryId} value={cat.categoryId}>
                    {cat.categoryName}
                  </option>
                ))
              ) : (
                <option disabled>No categories available</option>
              )}
            </Form.Select>
            {categories.length === 0 && (
              <small className="text-muted">Loading categories...</small>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="orchidDescription"
              value={form.orchidDescription}
              onChange={handleChange}
              placeholder="Detailed morphological characteristics..."
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Image URL</Form.Label>
            <Form.Control
              name="orchidURL"
              value={form.orchidURL}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/..."
            />
          </Form.Group>

          <Row className="mb-4">
            <Col sm={6}>
              <Form.Check
                type="checkbox"
                id="isNatural"
                name="isNatural"
                label="Is Natural (Tự nhiên)"
                checked={form.isNatural}
                onChange={handleChange}
                className="fw-semibold text-secondary"
              />
            </Col>
            <Col sm={6}>
              <Form.Check
                type="checkbox"
                id="isAttractive"
                name="isAttractive"
                label="Is Attractive (Hấp dẫn/Đặc sắc)"
                checked={form.isAttractive}
                onChange={handleChange}
                className="fw-semibold text-secondary"
              />
            </Col>
          </Row>

          <div className="d-flex gap-2">
            <Button variant="success" type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Orchid"}
            </Button>
            <Button variant="secondary" type="button" onClick={() => navigate("/")}>
              Cancel
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
