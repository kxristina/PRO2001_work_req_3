import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="white" expand="md" className="site-header">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Entertainment Gallery
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}