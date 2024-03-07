import React from "react";
import Button from "react-bootstrap/Button";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from "react-bootstrap/Card";
import g1 from "./img/g1.jpg";
import g2 from "./img/g2.jpg";
import g3 from "./img/g3.jpg";
import g4 from "./img/g4.jpg";
import g5 from "./img/g5.jpg";
import g6 from "./img/g6.jpg";
import g7 from "./img/g7.jpg";
import g8 from "./img/g8.jpg";
import g9 from "./img/g9.jpg";

const mainContent = () => {
  return (
    <>
      <h3 className="tempat container mt-4 fw-bold">Best Seller</h3>
      <div className="populer container mt-4">
        <CardGroup>
          <Card className="mb-3 mr-1">
            <Card.Img variant="top" src={g4} height={150} />
            <Card.Body>
              <Card.Title>Roti gandum</Card.Title>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>

          <Card className="mb-3 mr-1">
            <Card.Img variant="top" src={g5} height={150} />
            <Card.Body>
              <Card.Title>Roti Isi Coklat</Card.Title>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>

          <Card className="mb-3 mr-1">
            <Card.Img variant="top" src={g6} height={150} />
            <Card.Body>
              <Card.Title>Onde-Onde</Card.Title>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>

          <Card className="mb-3 mr-1">
            <Card.Img variant="top" src={g7} height={150} />
            <Card.Body>
              <Card.Title>Cookies Coklat</Card.Title>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>

          <Card className="mb-3 mr-1">
            <Card.Img variant="top" src={g8} height={150} />
            <Card.Body>
              <Card.Title>Donat Mini</Card.Title>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>

          <Card className="mb-3 mr-1">
            <Card.Img variant="top" src={g9} height={150} />
            <Card.Body>
              <Card.Title>Nastar</Card.Title>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>
        </CardGroup>
        
        <CardGroup>
          <Card className="mb-3 mr-1">
            <Card.Img variant="top" src={g4} height={150} />
            <Card.Body>
              <Card.Title>Roti gandum</Card.Title>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>

          <Card className="mb-3 mr-1">
            <Card.Img variant="top" src={g5} height={150} />
            <Card.Body>
              <Card.Title>Roti Isi Coklat</Card.Title>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>

          <Card className="mb-3 mr-1">
            <Card.Img variant="top" src={g6} height={150} />
            <Card.Body>
              <Card.Title>Onde-Onde</Card.Title>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>

          <Card className="mb-3 mr-1">
            <Card.Img variant="top" src={g7} height={150} />
            <Card.Body>
              <Card.Title>Cookies Coklat</Card.Title>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>

          <Card className="mb-3 mr-1">
            <Card.Img variant="top" src={g8} height={150} />
            <Card.Body>
              <Card.Title>Donat Mini</Card.Title>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>

          <Card className="mb-3 mr-1">
            <Card.Img variant="top" src={g9} height={150} />
            <Card.Body>
              <Card.Title>Nastar</Card.Title>
              <Button variant="success" size="sm">Selengkapnya</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default mainContent;
