import Card from 'react-bootstrap/Card';
import deleteCar from '../Services/deleteCar';
import updateCar from '../Services/updateCar';


let Car_card=({product})=>{
  

  let remove_onclick=()=>{
    deleteCar(product.id)
  }
  let add_onclick=()=>{
    product.quantity++
    updateCar(product.id,product)
  }
  let substract_onclick=()=>{
    if (product.quantity>1) {
      product.quantity--
      updateCar(product.id,product)
    } else{
      deleteCar(product.id)
    }
    
  }
    return (
        <>
          {[
            'Light'
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '13.5rem' }}
              className="mb-2"
              id='car_item'
            >
              <Card.Header id='car_btn_container'><button onClick={add_onclick}>+</button><button onClick={substract_onclick}>-</button><button id='removebtn' onClick={remove_onclick}>Elminar</button></Card.Header>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Categoría: {product.category}<br/>
                  Cantidad: {product.quantity}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </>
      );
}

export default Car_card