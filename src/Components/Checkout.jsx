import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Checkout() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Los terminos deben ser aceptados'),
  });

  return (
    <div id='checkout_form'>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: 'Nombre',
          lastName: 'Apellido',
          phone: 'Numero de telefono',
          mail: "Correo Electronico",
          province: 'Provincia',
          state: 'Canton',
          address: "Direccion",
          zip: 'Codigo postal',
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
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
                    value={values.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                <Form.Label>Correo Electronico</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Correo"
                    aria-describedby="inputGroupPrepend"
                    name="mail"
                    value={values.mail}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik03">
                <Form.Label>Provincia</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Provincia"
                  name="province"
                  value={values.province}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik04">
                <Form.Label>Canton</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Canton"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <br /><br /><br />
              <Form.Group as={Col} md="5" controlId="validationFormik05">
                <Form.Label>Direccion exacta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Direccion"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik05">
                <Form.Label>Codigo Postal</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <br />
                <Form.Label>Comentarios adicionales</Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="Comentarios">
                  <Form.Control
                    as="textarea"
                    placeholder="Comentarios"
                    style={{ height: '100px' }}
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
            <Button type="submit">Enviar solicitud de pedido</Button>
          </Form>
        )}
      </Formik>
  
    </div>
  );
}

export default Checkout;