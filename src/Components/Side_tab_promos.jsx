import { useEffect,useCallback,useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import getProducts from "../Services/getProducts";
import updateProduct from "../Services/updateProduct";


const Side_tab_promos = () => {
  //Hooks
  const [validated, setValidated] = useState(false);
  const [Price, setPrice] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Crear referencia para el formulario
  const formRef = useRef(null);

  //Funcion para el sumbit del form
  const handleSubmit =async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } 
    else{
      if (Price) {
        selectedProduct.onsale=Price;
      }
      if (Quantity) {
        selectedProduct.salequantity=Quantity;
      }
      await updateProduct(selectedProduct)
      setValidated(true)
    }
  };
  
   // Carga los datos del producto seleccionado
  const preview_data_selected = (event) => {    
    const productName = event.target.value;
    const product = products.find((p) => p.name === productName);
    if (product) {
      setSelectedProduct(product);
      setPrice(product.onsale?product.onsale: product.price); // Ajustar para usar onsale
      setQuantity(product.salequantity?product.salequantity: product.quantity); // Ajustar para usar salequantity
    } else {
      setSelectedProduct(null);
      setPrice("");
      setQuantity("");
    }
  };

     //useEffect que trae los productos del db.json
     const load_product = useCallback(() => {
      const fetchProducts = async () => {
        try {
          const response = await getProducts();
          setProducts(response);
        } catch (error) {
          console.error("Error fetching Products", error);
        }
      };
      fetchProducts();
    }, []); // Asegúrate de tener un array vacío para evitar re-ejecuciones innecesarias
    
    useEffect(() => {
      load_product();
    }, [load_product]);
    
     //Carga los productos disponibles para el select
  const options_select=()=>{
    return products.map((product) => (
      <option key={product.id} value={product.name}>{product.name}</option>))
    };

  return (
    <div id="form_admin">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Row id="first_row" className="mb-4">
          <Form.Select onChange={preview_data_selected} id="select_product" aria-label="Default select example">
            <option>Productos</option>
            {options_select()}
          </Form.Select>
        </Row>
        <Row id="second_row" className="mb-3">
        <Form.Group
           id="category_mid"
            as={Col}
            md="4"
            controlId="validationCustom02"
          >
            <Form.Label>Precio</Form.Label>
            <Form.Control
              required
              type="number"
              min="0"
              placeholder="Precio"
              value={Price}
              aria-describedby="inputGroupPrepend"
              onChange={(e) => setPrice(e.target.value)}
            />
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
                value={Quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Button type="submit">Añadir descuento</Button>
      </Form>
    </div>
  );
};

export default Side_tab_promos;
