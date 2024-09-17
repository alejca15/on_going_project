import Nav from "react-bootstrap/Nav";
import { useCallback, useEffect, useState } from "react";
import getCar from "../Services/getCar";
import Car_card from "./Car";

function Side_tab({everything,promotion,sweet,salty,item,theme,combo,animation,inflable,event}) {
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
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link style={{ color: "rgb(119, 113, 113)", fontSize:"larger", fontWeight:"bold" }} eventKey="link-1">
              Categorias
            </Nav.Link>
            <Nav.Link id="side_tab_item" onClick={everything} style={{ color: "rgb(119, 113, 113)" }} eventKey="link-1">
              Todos los productos
            </Nav.Link>
            <Nav.Link id="side_tab_item" onClick={promotion} style={{ color: "rgb(119, 113, 113)" }} eventKey="link-1">
              Promociones
            </Nav.Link>
            <Nav.Link id="side_tab_item" onClick={sweet} style={{ color: "rgb(119, 113, 113)" }} eventKey="link-1">
              Dulces
            </Nav.Link>
            <Nav.Link id="side_tab_item" onClick={salty} style={{ color: "rgb(119, 113, 113)" }} eventKey="link-2">
              Salados
            </Nav.Link>
            <Nav.Link id="side_tab_item" onClick={item} style={{ color: "rgb(119, 113, 113)" }} eventKey="link-3">
              Recuerdos
            </Nav.Link>
            <Nav.Link id="side_tab_item" onClick={theme} style={{ color: "rgb(119, 113, 113)" }} eventKey="link-4">
              Tematicas
            </Nav.Link>
            <Nav.Link id="side_tab_item" onClick={combo} style={{ color: "rgb(119, 113, 113)" }} eventKey="link-5">
              Combos
            </Nav.Link>
            <Nav.Link id="side_tab_item" onClick={animation} style={{ color: "rgb(119, 113, 113)" }} eventKey="link-6">
              Animación
            </Nav.Link>
            <Nav.Link id="side_tab_item" onClick={inflable} style={{ color: "rgb(119, 113, 113)" }} eventKey="link-7">
              Inflables
            </Nav.Link>
            <Nav.Link id="side_tab_item" onClick={event} style={{ color: "rgb(119, 113, 113)" }} eventKey="link-8">
              Eventos
            </Nav.Link>
          </Nav>
  );
}

export default Side_tab;
