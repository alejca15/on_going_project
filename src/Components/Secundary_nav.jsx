import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";



function Secundary_nav() {
  //Funcion que lleva al Login
  let navigate = useNavigate();
  const go_login = () => {
    navigate("/Login");
  };


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand
          style={{ fontSize: "xx-large", color: "rgb(237, 151, 165)" }}
        >
          Cositas Ricas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 d-flex justify-content-between"
            style={{ Height: "100px" }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to={"/Login"}
              style={{ textDecoration: "none", color: "rgb(119, 113, 113)" }}
            >
              <div id="nav_op"> Iniciar sesión</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/Register"}
              style={{ textDecoration: "none", color: "rgb(119, 113, 113)" }}
            >
              <div id="nav_op">Registrarse</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/"}
              style={{ color: "rgb(119, 113, 113)" }}
            >
              <div id="nav_op">Productos</div>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/ContactUs"}
              style={{ color: "rgb(119, 113, 113)" }}
            >
              <div id="nav_op"> Sobre Nosotros</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Secundary_nav;
