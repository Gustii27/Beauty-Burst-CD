import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar (){
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Beauty Burst</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/category/rostro">Rostro</Nav.Link>
              <Nav.Link as={NavLink} to="/category/ojos">Ojos</Nav.Link>
              <Nav.Link as={NavLink} to="/category/labios">Labios</Nav.Link>
              <Nav.Link as={NavLink} to="/category/accesorios">Accesorios</Nav.Link>
              <Nav.Link as={NavLink} to="/cart"><CartWidget/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;