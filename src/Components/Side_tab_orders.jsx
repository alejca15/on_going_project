import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const Side_tab_orders = ({accepted,denied,all,filter}) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };
  const Filter_promo=(e)=>{
    let data=e.target.value
    filter(data)  
  }
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      id="search_bar_orders_cont"
    >
      <Col xs="auto" id="search_bar_orders">
        <Form.Control
          type="text"
          placeholder="Buscar ordenes"
          className=" mr-sm-2"
          onChange={(e)=>Filter_promo(e)}
        />
        <br />
        <Button variant="secondary" onClick={all}>Pendientes</Button>
        <br />
        <br />
        <Button variant="success" onClick={accepted}>Aceptadas</Button>
        <br />
        <br />
        <Button variant="danger" onClick={denied}>Rechazadas</Button>
        <br />
        <br />
      </Col>
    </Form>
  );
};

export default Side_tab_orders;
