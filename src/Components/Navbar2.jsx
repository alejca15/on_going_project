import Button from "react-bootstrap/Button";

const Navbar2 = () => {

    return (
        <>
            <div id="nav_container" >
                <div id="nav_title">
                    Cositas Ricas
                </div>
                <div id="opt_container">
                </div>
                <Button variant="outline-success" id="navbarBtn">
                    Buscar
                </Button>
            </div>
        </>
    )
}

export default Navbar2