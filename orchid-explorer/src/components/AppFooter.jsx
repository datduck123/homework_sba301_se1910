import { Container } from 'react-bootstrap';

function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="about" className="bg-dark text-light py-4 mt-auto">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span>Orchid Explorer — SBA301 Slot 03</span>
        <span className="text-secondary">
          React Component Architecture &bull; {year}
        </span>
      </Container>
    </footer>
  );
}

export default AppFooter;
