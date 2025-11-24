import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col className="text-center">
          <p style={{ color: "white", margin: 0 }}>
            © {year} Arris ZAIDI — Tous droits réservés
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
