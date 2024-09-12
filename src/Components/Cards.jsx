import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic from "../Assets/Popcorn.jpg";
import postCar from "../Services/postCar";
import { useCallback, useEffect, useState } from "react";
import getCar from "../Services/getCar";


function Card_home({ product }) {
  //Hook
  const [car, setCar] = useState([]);

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
    try {
      console.log("Valor antes del refresh",car);
      
    await refreshCar()
    console.log("Valor despues del refresh",car);
    
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
    </div>
  );
}
export default Card_home;
