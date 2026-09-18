import { Alert, Container } from 'react-bootstrap';

function LearningAlert() {
  return (
    <section className="py-4">
      <Container>
        <Alert variant="info" className="mb-0">
          <Alert.Heading>Architecture Check — Bridge to Slot 04</Alert.Heading>
          <p className="mb-0">
            The six orchid cards above share an identical structure. In Slot 04, ask:{' '}
            <strong>
              how can ONE OrchidCard component receive different name, image and
              description values?
            </strong>{' '}
            Keyword for next slot: <em>Props</em>.
          </p>
        </Alert>
      </Container>
    </section>
  );
}

export default LearningAlert;
