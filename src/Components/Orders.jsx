import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import updateOrder from "../Services/updateOrders";


function Order({ Accepted, Denied, Data }) {

  //Aceptar Orden
  const accept_order = async() => {
    try{
      Data.state = "Accepted";
      await updateOrder(Data);
      Accepted()
    } catch(error){
      toast.error("Error al aceptar orden")
    }
  };

  //Rechazar orden
  const deny_order = async() => {
    try{
      Data.state = "Denied";
      await updateOrder(Data);
      Denied()
    }
    catch(error) {toast.error("Error al rechazar orden")}
  };

  //Carga los items del carrito
  let display_car_items = () => {
    let car = Data.car;
    return car.map((item) => (
      <div key={item.id}>
        <p>
          Nombre: {item.name} <br /> Precio: {item.price} <br /> Cantidad:{" "}
          {item.quantity}
        </p>
      </div>
    ));
  };

  //Decide que botones mostrar
  const show_btns = () => {
    if (Data.state == "Pending") {
      return (
        <div id="btn_container">
          <Button variant="primary" onClick={accept_order}>
            Aceptar
          </Button>
          <Button variant="danger" onClick={deny_order}>
            Rechazar
          </Button>
        </div>
      );
    }
  };


  return (
    <div id="orders_card_body">
      <Card>
        <Card.Header
          style={{ backgroundColor: "rgb(237, 151, 165)", color: "white" }}
          as="h5"
        >
          Numero de Orden: {Data.id}
        </Card.Header>
        <Card.Body>
          <Card.Title as="h6">
            Orden a nombre de: {Data.name} {Data.lastname}
          </Card.Title>
          <Card.Text>Numero de contacto: {Data.phone}</Card.Text>
          <Card.Text>Correo electrónico: {Data.mail}</Card.Text>
          <Card.Text>
            Lugar: {Data.province} {Data.canton} {Data.address} {Data.zip}
          </Card.Text>
          <Card.Text>Comentarios: {Data.comments} </Card.Text>
          <Card.Title as="h6">Productos </Card.Title>
          {display_car_items()}
          {show_btns()}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Order;
