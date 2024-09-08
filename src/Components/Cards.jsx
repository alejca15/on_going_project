import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic from "../Assets/Popcorn.jpg";
import postCar from "../Services/postCar";
import { useEffect, useState } from "react";
import getCar from "../Services/getCar";
import updateCar from "../Services/updateCar";

function Card_home({ name, category, product }) {
  const [car, setCar] = useState([]);
  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await getCar();
        setCar(response)
      } catch (error) {
        throw error
      }
    }
    fetchCar();
  }, [])
  let handleClick = () => {
    let item_in_Car=car.find((item)=>
      item.id===product.id
    )
    if (item_in_Car) {
      product.quantity++;
      return updateCar(product.id,product)
    }
    else return postCar(product)
  }
  return (
    <div id="cards_cont">
      <Card style={{ width: "18rem", height: "100px" }}>
        <Card.Img variant="top" src={pic} height={"200px"} width={"150px"} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Button variant="primary" onClick={handleClick} style={{ backgroundColor: "rgb(237, 151, 165)", borderColor: "rgb(237, 151, 165)" }}>Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Card_home;
