import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import "./navBar.css";

function NavBar (){
    return (
        <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img src="../image/logo.png" alt='Beauty-Burst' width={"150 px"}></img>
          </Navbar.Brand>
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