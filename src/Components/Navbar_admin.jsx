import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar_admin({show_orders,show_products,show_promos}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{ fontSize: "xx-large", color: "rgb(237, 151, 165)" }}>Cositas Ricas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id='nav_opts' className="me-auto">
            <Nav.Link id='nav_opt' onClick={show_products} >Productos</Nav.Link>
            <Nav.Link id='nav_opt' onClick={show_promos}>Promociones</Nav.Link>
            <Nav.Link id='nav_opt' onClick={show_orders}>Pedidos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_admin;