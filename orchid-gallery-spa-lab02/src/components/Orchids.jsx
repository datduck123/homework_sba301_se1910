import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useOrchids from "../hooks/useOrchids";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
import OrchidCard from "./OrchidCard";
import OrchidDetailModal from "./OrchidDetailModal";

export default function Orchids() {
  const { orchids, loading, error, reload } = useOrchids();
  const [show, setShow] = useState(false);
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("ALL");
  const [specialOnly, setSpecialOnly] = useState(false);

  const handleShow = (orchid) => {
    setSelectedOrchid(orchid);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedOrchid(null);
  };

  const categories = ["ALL", ...new Set(orchids.map((o) => o.category))];

  const visibleOrchids = orchids.filter((o) => {
    const matchName = o.orchidName
      .toLowerCase()
      .includes(keyword.trim().toLowerCase());
    const matchCategory = category === "ALL" || o.category === category;
    const matchSpecial = !specialOnly || o.isSpecial;
    return matchName && matchCategory && matchSpecial;
  });

  return (
    <Container id="orchids" className="py-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4 pb-3 border-bottom">
        <div>
          <h2 className="mb-1 fw-bold">Orchids Collection</h2>
          <p className="text-muted mb-0">
            Displaying{" "}
            <strong className="text-primary">{visibleOrchids.length}</strong> of{" "}
            {orchids.length} varieties
          </p>
        </div>
        <Button
          variant="outline-primary"
          onClick={reload}
          disabled={loading}
          className="shadow-sm"
        >
          {loading ? "Refreshing..." : "Reload"}
        </Button>
      </div>

      {/* Filter Toolbar */}
      <div className="row g-3 mb-4 p-3 bg-white rounded shadow-sm border">
        <Col md={5}>
          <Form.Control
            type="search"
            placeholder="Search orchid by name..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === "ALL" ? "All Categories" : c}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={3} className="d-flex align-items-center">
          <Form.Check
            type="switch"
            id="special-filter"
            label="Special Only"
            checked={specialOnly}
            onChange={(e) => setSpecialOnly(e.target.checked)}
            className="fw-semibold text-secondary"
          />
        </Col>
      </div>

      {/* Loading & Error States */}
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} onRetry={reload} />}

      {/* Empty State */}
      {!loading && !error && visibleOrchids.length === 0 && (
        <div className="text-center py-5 border rounded bg-white">
          <h4 className="text-muted fw-bold">No orchids found</h4>
          <p className="text-muted mb-0">
            Try changing your search keywords or clearing filters.
          </p>
        </div>
      )}

      {/* Card Grid */}
      {!loading && !error && visibleOrchids.length > 0 && (
        <Row className="g-4">
          {visibleOrchids.map((orchid) => (
            <Col xs={12} sm={6} lg={3} key={orchid.id}>
              <OrchidCard orchid={orchid} onDetail={handleShow} />
            </Col>
          ))}
        </Row>
      )}

      {/* Modal Detail */}
      <OrchidDetailModal
        show={show}
        orchid={selectedOrchid}
        onClose={handleClose}
      />
    </Container>
  );
}
