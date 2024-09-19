import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import getCar from "../Services/getCar";
import Car_card from "./Car";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCallback, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

function Navigation_bar({ checkout }) {
  //Dato traido del session storage para validar si un usuario a iniciado sesion
  const is_user_active = JSON.parse(sessionStorage.getItem("User"));
  //Hooks
  const [car, setCar] = useState([]);
  const [show, setShow] = useState(false);
  //Hook y fucion que cierra el modal
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  //Funcion que lleva al Login
  let navigate = useNavigate();
  const go_login = () => {
    navigate("/Login");
  };

  //Funciones que modifican los hooks
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (
      is_user_active == "false" ||
      is_user_active == "" ||
      is_user_active == null ||
      is_user_active == undefined ||
      is_user_active == []
    ) {
      return setShowModal(true);
    }
    setShow(true);
  };
  //Muestra el checkout y esconde el offcanvas
  const showCheckout = () => {
    checkout();
    setShow(false);
  };

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
    return car.map((item, index) => <Car_card product={item} key={index} />);
  };

  const show_car = () => {
    if (car.length > 0) {
      return (
        <div>
          {display_car()}
          <Button
            variant="outline-success"
            id="checkout_btn_active"
            onClick={showCheckout}
          >
            Hacer Pedido
          </Button>
        </div>
      );
    } else {
      return <p>El carrito se encuentra vacío</p>;
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
            <Nav.Link as={Link} to={"/ContactUs"} style={{ color: "rgb(119, 113, 113)" }}>
              <div id="nav_op"> Sobre Nosotros</div>
            </Nav.Link>
            <Button variant="primary" id="car_btn" onClick={handleShow}>
              Carrito
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>{show_car()}</Offcanvas.Body>
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
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Para poder ingresar al carrito, primero inicie sesión
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button onClick={go_login}>Ir al Login</button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default Navigation_bar;
