import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic from "../Assets/Popcorn.jpg";

function Card_home({name,email}) {
  return (
    <div id="cards_cont">
      <Card style={{ width: "18rem", height: "100px" }}>
          <Card.Img variant="top" src={pic} height={"200px"} width={"150px"} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
          <Button variant="primary" style={{backgroundColor:"rgb(237, 151, 165)", borderColor:"rgb(237, 151, 165)"}}>Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
 
export default Card_home;
