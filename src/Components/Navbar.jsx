import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import getCar from "../Services/getCar";
import Car_card from "./Car";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useCallback,useState,useEffect } from "react";



function Navigation_bar({checkout}) {
  //Hooks
  const [car, setCar] = useState([]);
  const [show, setShow] = useState(false);

  //Funciones que modifican los hooks
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Funcion que carga el carrito y lo actualiza

  let load_car = useCallback(() => {
    const fetch_Car = async () => {
      try {
        const response = await getCar();
        setCar(response);
      } catch (error) {
        throw error;
      }
    };
    fetch_Car();
  });
  useEffect(() => load_car(), [load_car]);

  //Funcion que carga y muestra el carrito
  let display_car = () => {
    if (car!=[]) {
      return car.map((item,index)=><Car_card product={item} key={index}/>)
    }
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
          <Nav className="me-auto my-2 my-lg-0 d-flex justify-content-between"style={{ Height: "100px"}} navbarScroll>
            <Nav.Link id="nav_item" as={Link} to={"/Login"} style={{ textDecoration: "none", color: "rgb(119, 113, 113)" }}>
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
            <Button variant="primary" id="car_btn" onClick={handleShow}>
        Carrito
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {display_car()}
          <Button variant="outline-success" id="checkout_btn_active" onClick={checkout}>Pagar</Button>
        </Offcanvas.Body>
      </Offcanvas>
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
