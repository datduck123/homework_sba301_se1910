import { Col, Container, Form, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { OrchidsData } from "../data/orchids";
import OrchidCard from "../components/OrchidCard";

export default function OrchidsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") ?? "all";
  const categories = ["all", ...new Set(OrchidsData.map((o) => o.category))];

  const visible =
    category === "all"
      ? OrchidsData
      : OrchidsData.filter((o) => o.category === category);

  function changeCategory(event) {
    const value = event.target.value;
    const next = new URLSearchParams(searchParams);
    if (value === "all") {
      next.delete("category");
    } else {
      next.set("category", value);
    }
    setSearchParams(next);
  }

  return (
    <Container className="py-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3 pb-2 border-bottom">
        <div>
          <h1 className="fw-bold mb-1">Orchids Collection</h1>
          <p className="text-muted mb-0">Current filter is encoded in the URL query string.</p>
        </div>
        <Form.Select
          value={category}
          onChange={changeCategory}
          style={{ maxWidth: 260 }}
          className="shadow-sm"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item === "all" ? "All Categories" : item}
            </option>
          ))}
        </Form.Select>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {visible.map((orchid) => (
          <Col key={orchid.id}>
            <OrchidCard orchid={orchid} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
