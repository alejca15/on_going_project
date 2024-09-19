import { useRef,useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import emailjs from "@emailjs/browser";

const Contact_form = () => {
  //Hooks
  const [validated, setValidated] = useState(false);
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [phone, setphone] = useState("");
  const [comments, setcomments] = useState("");
  const [Status, setStatus] = useState("")

  //Email.js
  const form = useRef();
  const sendEmail = () => {
    emailjs.sendForm( "service_nqfclpb", "template_owc4xt2", form.current,"Biauez3a-U5_y9JLx", form.current).then(
      () => {
        setStatus("Envio Exitoso");
        form.current.reset(); // Limpiar el formulario después de enviar
        console.log("Se envio");
        
      },
      (error) => {
        setStatus("No se envio.");
        console.error("FAILED...", error.text);
      }
    );
  };
  //Funcionalidad submit del form
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    sendEmail()
  };

  return (
    <div id="form_admin">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row id="first_row" className="mb-3">
          <Form.Group
            id="upper_left"
            as={Col}
            md="6"
            controlId="validationCustom01"
          >
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              defaultValue=""
              onChange={(e) => setname(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            id="upper_right"
            as={Col}
            md="4"
            controlId="validationCustom02"
          >
            <Form.Label>Numero de telefono</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Contacto"
              onChange={(e) => setphone(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row id="second_row" className="mb-3">
          <Form.Group
            id="category_mid"
            as={Col}
            md="6"
            controlId="validationCustomUsername"
          >
            <Form.Label>Correo electrónico</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Correo electrónico"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => setmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Control
          as="textarea"
          placeholder="¿Como podemos ayudarle?"
          style={{ height: "100px" }}
          onChange={(e) => setcomments(e.target.value)}
        /> <br />
        <Button type="submit">Solicitar contacto</Button>
      </Form>
    </div>
  );
};

export default Contact_form;
