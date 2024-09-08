import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigation_bar() {
  return (
    <Navbar expand="lg"  className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand style={{fontSize: "xx-large", color: "rgb(237, 151, 165)"}}>SweetThings</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            s
            navbarScroll
          >
            <Nav.Link>
              {" "}
              <Link
                to={"/Login"}
                style={{ textDecoration: "none", color: "rgb(119, 113, 113)"}}
              >
                Iniciar sesión
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                to={"/Register"}
                style={{ textDecoration: "none",color: "rgb(119, 113, 113)"}}
              >
                Registrarse
              </Link>
            </Nav.Link>
            <Nav.Link href="#action2" style={{color: "rgb(119, 113, 113)"}}>Productos</Nav.Link>
            <Nav.Link href="action4" style={{color: "rgb(119, 113, 113)"}}>Sobre Nosotros</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar.."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" id="navbarBtn" >Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation_bar;
