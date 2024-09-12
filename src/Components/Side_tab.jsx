import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";
import { useCallback, useEffect, useState } from "react";
import getCar from "../Services/getCar";
import Car_card from "./Car";

function Side_tab() {
  const [car, setCar] = useState([]);
  let load_car = useCallback(() => {
    const fetch_Car = async () => {
      try {
        const response = await getCar();
        setCar(response);
      } catch (error) {
        throw error;
      }
    };
    fetch_Car();
  });
  useEffect(() => load_car(), [load_car]);
  let display_car = () => {
    if (car!=[]) {
      return car.map((item,index)=><Car_card product={item} key={index}/>)
    }
  };

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Categorias </Accordion.Header>
        <Accordion.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link style={{ color: "rgb(119, 113, 113)" }} eventKey="link-1">
              Dulces
            </Nav.Link>
            <Nav.Link style={{ color: "rgb(119, 113, 113)" }} eventKey="link-2">
              Salados
            </Nav.Link>
            <Nav.Link style={{ color: "rgb(119, 113, 113)" }} eventKey="link-3">
              Recuerdos
            </Nav.Link>
            <Nav.Link style={{ color: "rgb(119, 113, 113)" }} eventKey="link-4">
              Tematicas
            </Nav.Link>
            <Nav.Link style={{ color: "rgb(119, 113, 113)" }} eventKey="link-5">
              Combos
            </Nav.Link>
            <Nav.Link style={{ color: "rgb(119, 113, 113)" }} eventKey="link-6">
              Animación
            </Nav.Link>
            <Nav.Link style={{ color: "rgb(119, 113, 113)" }} eventKey="link-7">
              Inflables
            </Nav.Link>
            <Nav.Link style={{ color: "rgb(119, 113, 113)" }} eventKey="link-8">
              Eventos
            </Nav.Link>
          </Nav>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Carrito </Accordion.Header>
        <Accordion.Body id="car_cont">{display_car()}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Side_tab;
