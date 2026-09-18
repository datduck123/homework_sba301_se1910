import { Card, Col, Container, Row } from 'react-bootstrap';

// Static care tips data
const tips = [
  {
    id: 'light',
    icon: '',
    title: 'Light',
    body: 'Prefer bright, indirect light. Observe leaf color — yellowing means too much sun, dark green means too little.',
  },
  {
    id: 'water',
    icon: '',
    title: 'Water',
    body: 'Water based on medium dryness and root condition, not a fixed daily schedule.',
  },
  {
    id: 'airflow',
    icon: '',
    title: 'Airflow',
    body: 'Good airflow helps reduce excessive moisture around leaves and roots.',
  },
];

function CareTips() {
  return (
    <section id="care" className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold mb-4">Care Tips</h2>
        <Row className="g-4">
          {tips.map((tip) => (
            <Col key={tip.id} xs={12} md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="fs-2 mb-2">{tip.icon}</div>
                  <Card.Title>{tip.title}</Card.Title>
                  <Card.Text className="text-secondary">{tip.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CareTips;
