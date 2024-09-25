import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import deleteProduct from "../Services/deleteProduct";
import updateProduct from "../Services/updateProduct";
import { toast } from "react-toastify";

function Cards_admin({notify, product, tab, modal }) {

  const show_btn = () => {
    if (tab == "Products") {
      return (
        <Button variant="danger" id="delete_btn" onClick={remove}>
          Eliminar
        </Button>
      );
    }
    if (tab == "Promos") {
      return (
        <Button variant="danger" id="delete_btn" onClick={remove_promo}>
          Eliminar
        </Button>
      );
    }
  };

  const remove = async () => {
    try {
      await deleteProduct(product.id);
      notify(); 
    } catch (error) {
      toast.error("Error al eliminar el producto"); 
    }
  };

  const remove_promo = async () => {
    let og_product = { ...product, onsale: false, salequantity: false };
    try {
      await updateProduct(og_product);
      toast.error("Promocion eliminada"); 
    } catch (error) {
      toast.error("Error al actualizar el producto"); 
    }
  };

  //Convierte la imagen de base 64 a algo que se pueda mostrar en formato img
  const imgSrc = product.img.startsWith("data:")
    ? product.img
    : `data:image/jpeg;base64,${product.img}`;

  return (
    <Card id="admin_card_body">
      <Card.Header as="h5">{product.name}</Card.Header>
      <Card.Body id="card_body">
        <div id="card_data">
        <Card.Text>Precio: ${product.onsale ? product.onsale : product.price}</Card.Text>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>
            Cantidad:{" "}
            {product.salequantity ? product.salequantity : product.quantity}
          </Card.Text>
          <Button variant="primary" onClick={() => modal(product)}>
            Editar
          </Button>{" "}
          <br />
          <br />
          {show_btn()}
        </div>
        <div id="container_img">
          <Card.Img id="image_card" variant="top" src={product.img} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards_admin;
