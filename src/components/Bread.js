import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import g1 from "./img/g1.jpg";
import g2 from "./img/g2.jpg";
import g8 from "./img/g8.jpg";
import g4 from "./img/g4.jpg";
import g5 from "./img/g5.jpg";
import g7 from "./img/g7.jpg";


const Bread = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={g1} height={250}/>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>Roti Pandan</Card.Title>
              <Card.Text>Harga: Rp 10.000</Card.Text>
              <Button variant="success" size="sm">Pesan Sekarang</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={g2} height={250}/>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>Roti Manis</Card.Title>
              <Card.Text>Harga: Rp 8.000</Card.Text>
              <Button variant="success" size="sm">Pesan Sekarang</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={g8} height={250}/>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>Roti Keju</Card.Title>
              <Card.Text>Harga: Rp 12.000</Card.Text>
              <Button variant="success" size="sm">Pesan Sekarang</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={g4} height={250}/>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>Roti Bakar</Card.Title>
              <Card.Text>Harga: Rp 15.000</Card.Text>
              <Button variant="success" size="sm">Pesan Sekarang</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={g5} height={250}/>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>Roti Coklat</Card.Title>
              <Card.Text>Harga: Rp 18.000</Card.Text>
              <Button variant="success" size="sm">Pesan Sekarang</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={g7} height={250}/>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>Roti Pisang</Card.Title>
              <Card.Text>Harga: Rp 12.000</Card.Text>
              <Button variant="success" size="sm">Pesan Sekarang</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Bread;
