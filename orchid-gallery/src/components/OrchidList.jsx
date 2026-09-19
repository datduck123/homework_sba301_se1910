import { Col, Container, Row } from "react-bootstrap";
import { OrchidsData } from "../shared/OrchidsData";
import OrchidCard from "./OrchidCard";

function OrchidList() {
  return (
    <Container id="orchids" className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
        <div>
          <h2 className="mb-1 fw-bold">Orchid Collection</h2>
          <p className="text-muted mb-0">
            Displaying <strong className="text-primary">{OrchidsData.length}</strong> beautiful varieties
          </p>
        </div>
      </div>

      <Row className="g-4">
        {OrchidsData.map((orchid) => (
          <Col key={orchid.id} xs={12} sm={6} lg={4}>
            <OrchidCard orchid={orchid} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OrchidList;
