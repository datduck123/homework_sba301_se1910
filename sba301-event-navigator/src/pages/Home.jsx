import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="py-5 text-center my-auto">
      <Container>
        <h1 className="display-4 fw-bold text-primary mb-3">Campus Event Navigator</h1>
        <p className="lead text-secondary mb-4 col-md-8 mx-auto">
          Discover technology workshops, research poster forums, startup pitch evenings, and professional skill clinics happening across campus.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Button size="lg" variant="primary" onClick={() => navigate("/events")}>
            Explore Events
          </Button>
          <Button size="lg" variant="outline-secondary" onClick={() => navigate("/about")}>
            About App
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Home;
