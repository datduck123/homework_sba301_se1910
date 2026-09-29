import { Container, Nav, Card } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <Container className="py-4">
      <h1 className="fw-bold mb-3">Member Dashboard</h1>
      <Nav variant="tabs" className="mb-3">
        <Nav.Link as={NavLink} to="/dashboard" end>
          Overview
        </Nav.Link>
        <Nav.Link as={NavLink} to="/dashboard/favorites">
          Favorites
        </Nav.Link>
        <Nav.Link as={NavLink} to="/dashboard/profile">
          Profile
        </Nav.Link>
      </Nav>
      <Card className="border-0 shadow-sm p-4 bg-white">
        <Outlet />
      </Card>
    </Container>
  );
}
