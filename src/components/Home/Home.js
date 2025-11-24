import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Button from "react-bootstrap/Button";

import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";



function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Bienvenue!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Je suis
                <strong className="main-name"> ZAIDI Arris</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>


              <div style={{ paddingLeft: 50, marginTop: 10 }}>
                <Button
                  as={Link}
                  to="/resume"
                  className="cv-button"
                  variant="outline-light"
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Voir mon CV
                </Button>
              </div>



              <Container>
        <Row style={{ paddingTop: "20px", paddingTop: "40px" }}>
          <Col md={10} className="home-about-social">
            <h1>Retrouvez-moi ici</h1>
            <p>
              N’hésitez pas à <span className="purple">me contacter</span> ou à suivre mes projets!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ArrysZD"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arris-zaidi-b09390347/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />


    </section>
  );
}

export default Home;
