import Carousel from 'react-bootstrap/Carousel';
import g1 from "./img/g1.jpg";
import g2 from "./img/g2.jpg";
import g3 from "./img/g3.jpg";



function Header() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={g1}
          alt="First slide"
        />
      <Carousel.Caption style={{ fontWeight: 'bold' }}>
        <h1 className="carousel-title">Selamat Datang Di Happy Bakery</h1>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={g2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="carousel-title">Happy Bakery</h3>
          <p className="carousel-text">Terbuat Dari Bahan Pilihan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={g3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carousel-title">Happy Bakery</h3>
          <p className="carousel-text">Terbuat Dari Bahan Pilihan</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
