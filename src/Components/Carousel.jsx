import Carousel from "react-bootstrap/Carousel";
import pic from "../Assets/Codorniz.jpg";

function CarouselH() {
  return (
    <Carousel fade interval={2000}>
      <Carousel.Item>
        <img src={pic} height={"450px"} alt="codorniz" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={pic} height={"450px"} alt="codorniz" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={pic} height={"450px"} alt="codorniz" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselH;
