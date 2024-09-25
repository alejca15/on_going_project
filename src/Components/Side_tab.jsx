import Nav from "react-bootstrap/Nav";

function Side_tab({everything,promotion,sweet,salty,item,combo,animation,inflable,event}) {

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
