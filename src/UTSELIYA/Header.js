import Carousel from 'react-bootstrap/Carousel';
import g3 from "./img/g3.jpg";
import g2 from "./img/g2.jpg";
import g6 from "./img/g6.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={g3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Happy Bakery</h3>
          <p>Kenikmatan yang Menciptakan Kenangan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={g2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Happy Bakery</h3>
          <p>Kenikmatan yang Menciptakan Kenangan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={g6}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Happy Bakery</h3>
          <p>
          Kenikmatan yang Menciptakan Kenangan
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;