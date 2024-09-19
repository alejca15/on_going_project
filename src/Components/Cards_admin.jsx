import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import deleteProduct from '../Services/deleteProduct';


function Cards_admin({product}) {
  const remove=()=>{
    deleteProduct(product.id)
  }
  //Convierte la imagen de base 64 a algo que se pueda mostrar en formato img
  const imgSrc = product.img.startsWith('data:') ? product.img : `data:image/jpeg;base64,${product.img}`;

  return (
    <Card id='admin_card_body'>
      <Card.Header as="h5">{product.name}</Card.Header>
      <Card.Body id='card_body'>
        <div id='card_data'>
        <Card.Title>Precio: {product.price}</Card.Title>
        <Card.Text>{product.category}
        </Card.Text>
        <Card.Text>
          Cantidad: {product.quantity}
        </Card.Text>
        <Button variant="primary">Editar</Button> <br /><br />
        <Button variant="danger" onClick={remove} >Eliminar</Button>
        </div>
        <div id='container_img'>
        <Card.Img id='image_card' variant="top" src={product.img} />
        </div>
       
      </Card.Body>
    </Card>
  );
}

export default Cards_admin;