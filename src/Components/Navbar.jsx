import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigation_bar({Show,No_Show,Display}) {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand
          style={{ fontSize: "xx-large", color: "rgb(237, 151, 165)" }}
        >
          SweetThings
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 d-flex justify-content-between"style={{ Height: "100px"}} navbarScroll>
            <Nav.Link id="nav_item" as={Link} to={"/"} style={{ textDecoration: "none", color: "rgb(119, 113, 113)" }}>
              Iniciar sesión
              </Nav.Link>
            <Nav.Link id="nav_item" as={Link} to={"/Register"}  style={{ textDecoration: "none", color: "rgb(119, 113, 113)" }}>
                Registrarse
            </Nav.Link>
            <Nav.Link id="nav_item" style={{ color: "rgb(119, 113, 113)" }}>
              Productos
            </Nav.Link>
            <Nav.Link id="nav_item" style={{ color: "rgb(119, 113, 113)" }}>
              Sobre Nosotros
            </Nav.Link>
            <NavDropdown  title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {Display?<Button variant="outline-success" id="checkout_btn_active" onClick={Show}>Checkout</Button>:<Button variant="outline-success" id="checkout_btn_inactive" onClick={No_Show}>Productos</Button>}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar.."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" id="navbarBtn">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation_bar;
