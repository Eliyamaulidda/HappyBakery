import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import t1 from "./img/t1.jpg";
import t2 from "./img/t2.jpg";
import t3 from "./img/t3.jpg";
import t4 from "./img/t4.jpg";
import t5 from "./img/t5.jpg";
import t6 from "./img/t6.jpg";



const Tradisional = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={t1} height={250}/>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>Roti Pandan</Card.Title>
              <Card.Text>Harga: Rp 10.000</Card.Text>
              <Button variant="success" size="sm">Pesan Sekarang</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={t2} height={250}/>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>Apem</Card.Title>
              <Card.Text>Harga: Rp 8.000</Card.Text>
              <Button variant="success" size="sm">Pesan Sekarang</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={t3} height={250}/>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>Kue Lumpur</Card.Title>
              <Card.Text>Harga: Rp 12.000</Card.Text>
              <Button variant="success" size="sm">Pesan Sekarang</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={t4} height={250}/>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>Klepon</Card.Title>
              <Card.Text>Harga: Rp 15.000</Card.Text>
              <Button variant="success" size="sm">Pesan Sekarang</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={t5} height={250}/>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>Kue Lapis</Card.Title>
              <Card.Text>Harga: Rp 18.000</Card.Text>
              <Button variant="success" size="sm">Pesan Sekarang</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <Card>
            <Card.Img variant="top" src={t6} height={250}/>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>Kue Lumpur</Card.Title>
              <Card.Text>Harga: Rp 12.000</Card.Text>
              <Button variant="success" size="sm">Pesan Sekarang</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tradisional;
