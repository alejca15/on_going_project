import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic from "../Assets/Popcorn.jpg";
import postCar from "../Services/postCar";
import { useCallback, useEffect, useState } from "react";
import getCar from "../Services/getCar";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";


function Card_home({ product }) {
  const navigate=useNavigate()

  //Trae los datos del SessionStorage en caso de que un usuario haya ingresado
  const is_user_active=JSON.parse(sessionStorage.getItem("User"));
  //Hook
  const [car, setCar] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {setShowModal(false)};

  const go_login=()=>{
    navigate("/Login")
  }

  //Funcion que refresca el hook
  const refreshCar = useCallback(async () => {
    try {
      const response = await getCar();
      setCar(response);
    } catch (error) {
      throw error;
    }
  }, []);
  
  useEffect(() => {refreshCar();}, [refreshCar]);

  //Funcion que añade al carrito y si ya existe el articulo le suma a la cantidad
  let handleClick = async() => {
    console.log(is_user_active);
    
    if (is_user_active=="false"||is_user_active==""||is_user_active==null||is_user_active==undefined||is_user_active==[]) {
      return setShowModal(true)
    }
    try {      
    await refreshCar()
    let item_in_Car = car.find((item) => item.id === product.id);
    if (!item_in_Car) {
      await postCar(product);
      await refreshCar()
    } else {
      return await refreshCar()
  }}
  catch(error) {
    console.log("Error al realizar la funcion",error);
    
  }
}


  //Return que crea el html
  return (
    <div id="cards_cont">
      <Card style={{ width: "18rem", height: "100px" }}>
        <Card.Img variant="top" src={pic} height={"200px"} width={"150px"} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Button
            variant="primary"
            onClick={handleClick}
            style={{
              backgroundColor: "rgb(237, 151, 165)",
              borderColor: "rgb(237, 151, 165)",
            }}
          >
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Para poder ingresar al carrito, primero inicie sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body><button onClick={go_login}>Ir al Login</button></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Card_home;
