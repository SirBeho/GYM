'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/horario">Horario</Nav.Link>
            <NavDropdown title="Rutinas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/pierna">Piernas</NavDropdown.Item>
              <NavDropdown.Item href="#">Brazo</NavDropdown.Item>
              <NavDropdown.Item href="#">Abdomen</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/foros">Foros</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

 