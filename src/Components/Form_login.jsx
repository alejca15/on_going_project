import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";


function display(user) {
    console.log(user);
}


function FormL() {
    const [user, setUser] = useState("");
    const handleClick=()=>{display(user)};
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Corre Electrónico</Form.Label>
        <Form.Control
          onChange={(e) => {
            setUser(e.target.value);
          }}
          type="email"
          placeholder="Ingrese su correo"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" />
      </Form.Group>
      <Button id="btn_login" onClick={handleClick} variant="primary">
        Iniciar sesión
      </Button>
    </Form>
  );
}

export default FormL;
