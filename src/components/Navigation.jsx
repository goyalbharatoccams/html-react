import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar-light bg-white py-3">
      <Container className="px-5">
        <Navbar.Brand as={Link} to="/">
          <span className="fw-bolder text-primary">Start Bootstrap</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto mb-2 mb-lg-0 small fw-bolder">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
