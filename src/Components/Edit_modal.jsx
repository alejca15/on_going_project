import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import updateProduct from "../Services/updateProduct";

const Edit_modal = ({ show, onHide, product }) => {
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("Dulces");
  const [Quantity, setQuantity] = useState("");
  const [Img, setImg] = useState("");

  const save_product = () => {
    let new_Data = { ...product };
    if (Name) {
      new_Data.name = Name;
    }
    if (Price) {
      new_Data.price = Price;
    }
    if (Quantity) {
      new_Data.quantity = Quantity;
    }
    if (Category) {
      new_Data.category = Category;
    }
    if (Img) {
      new_Data.img = Img;
    }
    updateProduct(new_Data);
    setName("");
    setPrice("");
    setQuantity("");
    setCategory("Dulces");
    setImg("");
    return onHide();
  };

  // Convertir img a base64
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3" id="first_row">
            <Form.Group
              className="mb-1"
              controlId="validationCustom"
              id="upper_left"
            >
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="email"
                placeholder="Nombre: "
                defaultValue={product.name}
                style={{ width: "150px" }}
              />
            </Form.Group>
            <Form.Group
              id="upper_right"
              className="mb-1"
              controlId="validationCustom02"
            >
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="number"
                placeholder="Cantidad:"
                defaultValue={product.price}
                style={{ width: "100px" }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3" id="second_row">
            <Form.Group
              className="mb-1"
              id="category_mid"
              controlId="validationCustom03"
            >
              <Form.Label>Categoria</Form.Label>
              <Form.Select
                style={{ width: "170px" }}
                onChange={(e) => setCategory(e.target.value)}
                id="select_product"
                aria-label="Default select example"
              >
                <option value="Dulces">Dulces</option>
                <option value="Salados">Salados</option>
                <option value="Recuerdos">Recuerdos</option>
                <option value="Tematicas">Tematicas</option>
                <option value="Combos">Combos</option>
                <option value="Animacion">Animacion</option>
                <option value="Inflable">Inflables</option>
                <option value="Evento">Eventos</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              id="quantity_mid"
              className="mb-1"
              controlId="validationCustom04"
            >
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                type="text"
                placeholder="Cantidad:"
                defaultValue={product.quantity}
                style={{ width: "100px" }}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Control
              id="file_edit"
              required
              type="file"
              onChange={handleFileChange}
            />
          </Row>
          <div id="img_container_edit">
            {Img && (
              <img
                src={Img}
                alt="Preview"
                style={{ maxWidth: "90%", height: "155px" }}
              />
            )}
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={save_product}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Edit_modal;
