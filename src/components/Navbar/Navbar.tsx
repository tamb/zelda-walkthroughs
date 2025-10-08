import { useId } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar as BSNavbar, Nav } from 'react-bootstrap';

export const Navbar = () => {
  const navbarId = useId();

  return (
    <BSNavbar variant="dark" expand="lg" className="mb-4">
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="triforce-accent">
          Zelda Walkthroughs
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls={navbarId} />
        <BSNavbar.Collapse id={navbarId}>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#games">Games</Nav.Link>
            <Nav.Link href="#guides">Guides</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};
