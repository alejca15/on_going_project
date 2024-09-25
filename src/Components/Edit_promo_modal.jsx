import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import updateProduct from "../Services/updateProduct";

const Edit_promo_modal = ({ show, onHide, product }) => {
  const [Price, setPrice] = useState("");
  const [Quantity, setQuantity] = useState("");

  const save_promo = () => {
    let new_Data = {...product};
    if (Price) {
        new_Data.onsale=Price;
    }
    if (Quantity) {
        new_Data.salequantity=Quantity;
    }
    updateProduct(new_Data);
    return onHide();
  };

  

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3" id="first_row">
            <Form.Group id="upper_left" className="mb-1" controlId="validationCustom02">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="email"
                placeholder="Cantidad:"
                defaultValue={product.onsale?product.onsale:product.price}
                style={{ width: "100px" }}
              />
            </Form.Group>
            <Form.Group id="upper_right" className="mb-1" controlId="validationCustom04">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                type="email"
                placeholder="Cantidad:"
                defaultValue={product.salequantity?product.salequantity:product.quantity}
                style={{ width: "100px" }}
              />
            </Form.Group>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={save_promo}>Guardar Cambios</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Edit_promo_modal;
