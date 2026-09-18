import { Button, Card, Col, Container, Row } from 'react-bootstrap';

// NOTE: These 6 cards share identical structure — intentional for Slot 03.
// In Slot 04, refactor into one reusable <OrchidCard> component receiving
// name/image/genus/description via Props.
const orchids = [
  {
    id: 'orchid-01',
    image: '/images/orchid-01.jpg',
    alt: 'Purple orchid illustration',
    name: 'Purple Star',
    description: 'Phalaenopsis — soft light and moderate watering.',
  },
  {
    id: 'orchid-02',
    image: '/images/orchid-02.jpg',
    alt: 'Pink orchid illustration',
    name: 'Pink Dawn',
    description: 'Dendrobium — bright indirect light and airy roots.',
  },
  {
    id: 'orchid-03',
    image: '/images/orchid-03.jpg',
    alt: 'White orchid illustration',
    name: 'White Cloud',
    description: 'Vanda — warm conditions and strong filtered light.',
  },
  {
    id: 'orchid-04',
    image: '/images/orchid-03.jpg',
    alt: 'Yellow orchid illustration',
    name: 'Golden Sun',
    description: 'Oncidium — good airflow and careful moisture control.',
  },
  {
    id: 'orchid-05',
    image: '/images/orchid-02.jpg',
    alt: 'Orange orchid illustration',
    name: 'Amber Wing',
    description: 'Cattleya — bright light and a drying period between watering.',
  },
  {
    id: 'orchid-06',
    image: '/images/orchid-01.jpg',
    alt: 'Blue orchid illustration',
    name: 'Blue Mist',
    description: 'Practice sample — discuss reuse and Props next slot.',
  },
];

function OrchidGallery() {
  return (
    <section id="gallery" className="py-5">
      <Container>
        {/* Section header */}
        <div className="mb-4">
          <p className="text-uppercase text-secondary fw-semibold mb-1">Gallery</p>
          <h2 className="fw-bold mb-1">Featured Orchids</h2>
          <p className="text-secondary mb-0">
            Static cards today; data-driven with Props arrives in Slot 04.
          </p>
        </div>

        {/* Card grid: 1 col (xs) → 2 col (sm) → 3 col (lg) */}
        <Row className="g-4">
          {orchids.map((orchid) => (
            <Col key={orchid.id} xs={12} sm={6} lg={4}>
              <Card className="h-100 orchid-card shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={orchid.image}
                  alt={orchid.alt}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{orchid.name}</Card.Title>
                  <Card.Text className="text-secondary">{orchid.description}</Card.Text>
                  <Button variant="outline-primary" className="mt-auto">
                    View Orchid
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default OrchidGallery;
