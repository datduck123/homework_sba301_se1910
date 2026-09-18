import { Card, Col, Container, Row } from 'react-bootstrap';

// Static stats — will become data-driven with Props in Slot 04
const stats = [
  { value: '6',  label: 'Featured orchids' },
  { value: '3',  label: 'Care topics' },
  { value: '7',  label: 'Custom components' },
];

function QuickStats() {
  return (
    <section className="py-4 bg-light">
      <Container>
        <Row className="g-3 text-center">
          {stats.map((stat) => (
            <Col key={stat.label} xs={12} md={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="py-4">
                  <div className="display-6 fw-bold text-primary">{stat.value}</div>
                  <Card.Text className="text-secondary mb-0">{stat.label}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default QuickStats;
