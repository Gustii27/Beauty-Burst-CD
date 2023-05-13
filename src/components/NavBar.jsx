import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar (){
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Beauty Burst</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#rostro">Rostro</Nav.Link>
              <Nav.Link href="#ojos">Ojos</Nav.Link>
              <Nav.Link href="#labios">Labios</Nav.Link>
              <Nav.Link href="#accesorios">Accesorios</Nav.Link>
              <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;