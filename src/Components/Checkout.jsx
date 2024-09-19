import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import getCar from "../Services/getCar";
import { useRef,useState } from "react";
import postOrder from "../Services/postOrder";
import Modal from "react-bootstrap/Modal";
import getOrders from "../Services/getOrders";
import deleteCar from "../Services/deleteCar";
import emailjs from "@emailjs/browser";

function Checkout({Done}) {

  //Hooks
  const { Formik } = formik;
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setphone] = useState("");
  const [mail, setmail] = useState("");
  const [province, setprovince] = useState("");
  const [canton, setcanton] = useState("");
  const [address, setaddress] = useState("");
  const [zip, setzip] = useState("");
  const [comments, setcomments] = useState("");
  const [orderId, setorderId] = useState(null)
  const [Status, setStatus] = useState("")

  //Email.js
  const form = useRef();
  const sendEmail = () => {
    emailjs.sendForm( "service_v4gpcpb", "template_sobfyxc", form.current,'Biauez3a-U5_y9JLx', form.current).then(
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
  
  //Hook del modal y funcion que modifica el modal
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () =>{ setShowModal(false); clear_car(); return Done()};

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup
      .bool()
      .required()
      .oneOf([true], "Los terminos deben ser aceptados"),
  });
  //Funcion que toma los datos del los hooks y hace el post de pedido con su respectivo carrito
  const order = async (event) => {
    event.preventDefault();
    let car = await getCar();
    let order_data = {
      name,
      lastname,
      phone,
      mail,
      province,
      canton,
      address,
      zip,
      comments,
      car,
    };
    if (name !== "" && lastname !== "" && phone !== "" && mail !== "" && province !== "" && canton !== "" && address !== "" && car.length > 0) {
      await postOrder(order_data)
      const id= await getId()
      setorderId(id)
      setShowModal(true)
      sendEmail()
    }
  };

  const getId = async () => {
    let orders = await getOrders();
    let lastIndex = orders.length - 1;
    let lastOrder = orders[lastIndex];
    return lastOrder.id;
  };

  const clear_car=async()=>{
    let shopping_car=await getCar();
    shopping_car.map((item)=>{deleteCar(item.id)})
  }

  return (
    <div id="checkout_form">
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: "Nombre",
          lastName: "Apellido",
          phone: "Numero de telefono",
          mail: "Correo Electronico",
          province: "Provincia",
          state: "Canton",
          address: "Direccion",
          zip: "Codigo postal",
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, touched, errors }) => (
          <Form ref={form} noValidate onSubmit={order}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  onChange={(e) => setname(e.target.value)}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  onChange={(e) => setlastname(e.target.value)}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                <Form.Label>Numero de contacto</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">#</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Numero de contacto"
                    aria-describedby="inputGroupPrepend"
                    name="phone"
                    onChange={(e) => setphone(e.target.value)}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingrese un numero de telefono
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="vvalidationFormik03">
                <Form.Label>Correo Electronico</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Correo"
                    aria-describedby="inputGroupPrepend"
                    name="mail"
                    onChange={(e) => setmail(e.target.value)}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingrese un nombre de usuario
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik04">
                <Form.Label>Provincia</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Provincia"
                  name="province"
                  onChange={(e) => setprovince(e.target.value)}
                  isInvalid={!!errors.city}
                />

                <Form.Control.Feedback type="invalid">
                  Ingrese una provincia
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik05">
                <Form.Label>Canton</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Canton"
                  name="state"
                  onChange={(e) => setcanton(e.target.value)}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese un Cantón
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <br />
              <br />
              <Form.Group as={Col} md="5" controlId="validationFormik06">
                <Form.Label>Direccion exacta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Direccion"
                  name="address"
                  onChange={(e) => setaddress(e.target.value)}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid">
                  Ingrese una dirección
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik07">
                <Form.Label>Codigo Postal</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  onChange={(e) => setzip(e.target.value)}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid">
                  Ingrese su codigo Postal
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <br />
                <Form.Label>Comentarios adicionales</Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Comentarios especificos acerca del pedido"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Comentarios"
                    style={{ height: "100px" }}
                    onChange={(e) => setcomments(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="Acepto los terminos y condiciones"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              />
            </Form.Group>
            <Button type="submit">
              Enviar solicitud de pedido
            </Button>
          </Form>
        )}
      </Formik>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Su orden fue realizada con éxito</Modal.Title>
        </Modal.Header>
        <Modal.Body>Numero de orden: {orderId ? orderId.toUpperCase() : ''}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Checkout;
