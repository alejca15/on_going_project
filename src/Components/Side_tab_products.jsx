import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import postProduct from "../Services/postProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Side_tab_products = () => {

  // Toastify
  const notifySuccess = () => toast.success("Producto Añadido");
  const notifyError = () => toast.error("Error al añadir el producto");

  
  //Hooks
  const [validated, setValidated] = useState(false);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState("");
  const [category, setcategory] = useState("Dulces");
  const [img, setimg] = useState("");

  // Crear referencia para el formulario
  const formRef = useRef(null);

  // Convertir img a base64
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setimg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const product = {
        name,
        price,
        onsale: false,
        salequantity: false,
        quantity,
        category,
        img,
      };

      try {
        await postProduct(product);
        notifySuccess(); 
      } catch (error) {
        notifyError(); 
      }

      formRef.current.reset();
      // Limpiar el valor de los hooks
      setname("");
      setprice("");
      setquantity("");
      setcategory("Dulces ");
      setimg("");
      setValidated(false); // Reinicia la validación
    }
  };
  return (
    <div id="form_admin">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Row id="first_row" className="mb-2">
          <Form.Group
            id="upper_left"
            as={Col}
            md="6"
            controlId="validationCustom01"
          >
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Producto"
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
            <Form.Label>Precio en colones</Form.Label>
            <Form.Control
              required
              type="number"
              min="0"
              placeholder="Precio"
              defaultValue="0"
              onChange={(e) => setprice(e.target.value)}
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
            <Form.Label>Categoría</Form.Label>
            <Form.Select style={{width:"170px"}} onChange={(e)=>setcategory(e.target.value)} id="select_product" aria-label="Default select example">
            <option value="Dulces">Dulces</option>
            <option value="Salados" >Salados</option>
            <option value="Recuerdos">Recuerdos</option>
            <option value="Tematicas">Tematicas</option>
            <option value="Combos">Combos</option>
            <option value="Animacion" >Animacion</option>
            <option value="Inflable">Inflables</option>
            <option value="Evento">Eventos</option>
          </Form.Select>
          </Form.Group>
          <Form.Group
            id="quantity_mid"
            as={Col}
            md="6"
            controlId="validationCustomUsername2"
          >
            <Form.Label>Cantidad</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Cantidad"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => setquantity(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row id="third_row" className="mb-2">
          <Form.Control
            id="input_file"
            required
            type="file"
            onChange={handleFileChange}
          />
        </Row>
        <div id="img_container">
          {img && (
            <img
              src={img}
              alt="Preview"
              style={{ maxWidth: "90%", height: "230px" }}
            />
          )}
        </div>
        <Button type="submit">Añadir producto</Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Side_tab_products;
