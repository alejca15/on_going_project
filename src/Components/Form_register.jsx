import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import postUsers from "../Services/postUsers";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Form_register() {
  //Toastify
  const notify = () => toast("El Usuario ha sido registrado");

  //Hooks
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [second_password, setSecond_password] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [check, setCheck] = useState("");

  const handleClick = () => {
    if (
      !name ||
      !password ||
      !second_password ||
      !email ||
      !city ||
      !phone ||
      !check
    ) {
      setShowModal(true);
    } else {
      if (password == second_password) {
        postUsers(name, password, email, city, phone);
        notify();
        setTimeout(() => {
          navigate("/Login");
        }, 5000);
      } else setShowModal2(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);
  const handleCloseModal2 = () => setShowModal2(false);

  return (
    <div id="register_form">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder="Nombre completo.."
            />
            <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Contraseña.."
            />
            <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Confirme su contraseña</Form.Label>
            <Form.Control
              onChange={(e) => setSecond_password(e.target.value)}
              required
              type="password"
              placeholder="Confirme su contraseña.."
            />
            <Form.Control.Feedback>Perfecto!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="5" controlId="validationCustomUsername">
            <Form.Label>Correo Electrónico</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Correo electrónico.."
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un correo.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Provincia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Provincia.."
              required
              onChange={(e) => setCity(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese una Provincia.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Numero de Telefono</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">#</InputGroup.Text>
              <Form.Control
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                min="0"
                placeholder="Contacto.."
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un correo.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            onClick={(e) => setCheck(e.target.value)}
            required
            label="Acepto los términos y condiciones"
            feedback="Debes aceptar los términos para continuar."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="button" onClick={handleClick}>
          Registrar Usuario
        </Button>
        <ToastContainer />
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Información Incompleta</Modal.Title>
        </Modal.Header>
        <Modal.Body>Por favor, complete todos los campos.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal2} onHide={handleCloseModal2}>
        <Modal.Header closeButton>
          <Modal.Title>Las contraseñas no coinciden</Modal.Title>
        </Modal.Header>
        <Modal.Body>Por favor, revisa las contraseñas ingresadas.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal2}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Form_register;
