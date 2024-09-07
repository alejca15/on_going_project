import Nav from "react-bootstrap/Nav";

function Side_tab() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home" disabled style={{fontSize:"large", color: "rgb(119, 113, 113)",fontWeight:"bold"}}>Categorías</Nav.Link>
      <Nav.Link style={{color: "rgb(119, 113, 113)"}} eventKey="link-1">Dulces</Nav.Link>
      <Nav.Link style={{color: "rgb(119, 113, 113)"}} eventKey="link-2">Salados</Nav.Link>
      <Nav.Link style={{color: "rgb(119, 113, 113)"}} eventKey="link-3">Recuerdos</Nav.Link>
      <Nav.Link style={{color: "rgb(119, 113, 113)"}} eventKey="link-4">Tematicas</Nav.Link>
      <Nav.Link style={{color: "rgb(119, 113, 113)"}} eventKey="link-5">Paquetes</Nav.Link>
      <Nav.Link style={{color: "rgb(119, 113, 113)"}} eventKey="link-6">Animación</Nav.Link>
      <Nav.Link style={{color: "rgb(119, 113, 113)"}} eventKey="link-7">Inflables</Nav.Link>
      <Nav.Link style={{color: "rgb(119, 113, 113)"}} eventKey="link-8">Eventos</Nav.Link>
    </Nav>
  );
}

export default Side_tab;
