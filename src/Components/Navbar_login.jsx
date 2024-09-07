import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Nav_login() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize: "xx-large", color: "rgb(237, 151, 165)"}}>SweetThings</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav_login;
