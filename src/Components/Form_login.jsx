import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import getUsers from "../Services/getUsers";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Secundary_nav from "./Secundary_nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormL() {
  //Toastify
  const notify = () => toast("Has iniciado sesión");
  //Local stora que setea el valor del usuario a inactivo
  let inactive = [];
  sessionStorage.setItem("User", JSON.stringify(inactive));

  //Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //Funcionalidad del boton
  const handleClick = async () => {
    let users = await getUsers();
    let user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      sessionStorage.setItem("User", JSON.stringify(user));
      if (user.admin == true) {
        notify();
        setTimeout(() => {
          navigate("/Admin");
        }, 5000);
      } else{
        notify();
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    } else return setShowModal(true);
  };
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div id="nav">
        <Secundary_nav />
      </div>{" "}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Corre Electrónico</Form.Label>
          <Form.Control
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Ingrese su correo"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button id="btn_login" onClick={handleClick} variant="primary">
          Iniciar sesión
        </Button>
        <ToastContainer />
      </Form>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Los datos ingresados no coinciden</Modal.Title>
        </Modal.Header>
        <Modal.Body>Por favor, revise los datos ingresados.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormL;
