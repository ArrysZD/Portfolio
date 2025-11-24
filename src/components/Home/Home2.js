import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import avatarImg from "../../Assets/avatar.svg";
import karateImg from "../../Assets/karate.png"; // ta photo karaté

function Home2() {
  const [currentImg, setCurrentImg] = useState(avatarImg);

  const handleKarateClick = () => {
    setCurrentImg(karateImg);

    // revenir à l’avatar après 10 secondes
    setTimeout(() => {
      setCurrentImg(avatarImg);
    }, 10000);
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI <span className="purple">ME PRÉSENTER</span>
            </h1>

            <p className="home-about-body">
              Passionné par l’informatique, j’aime explorer plusieurs univers :
              <span className="purple"> cybersécurité</span>,{" "}
              <span className="purple">data</span>,{" "}
              <span className="purple">IA</span> et{" "}
              <span className="purple">développement logiciel</span>.
              <br />
              <br />
              Ce site vous permet de découvrir mon parcours, mes projets et ce
              qui me motive à évoluer dans différents domaines.
              <br />
              <br />
              En dehors de l’écran, je pratique le{" "}
              <b className="purple" style={{ cursor: "pointer" }} onClick={handleKarateClick}>
                karaté en haut niveau (cliquez ici 🥋)
              </b>
              , une discipline qui m’a appris la rigueur et la persévérance.
            </p>

            {/* Bloc navigation vers les sections */}
            <div className="home-navigation" style={{ marginTop: "20px" }}>
              <h3 style={{ fontSize: "1.4em", marginBottom: "10px" }}>
                Explorer le site
              </h3>
              <p style={{ marginBottom: "15px" }}>
                Pour en savoir plus sur moi :
              </p>
              <div style={{ display: "grid", gap: "10px", flexWrap: "wrap" }}>
                <Button
                  as={Link}
                  to="/about"
                  variant="outline-light"
                  className="cv-button"
                >
                  Formation &amp; compétences
                </Button>
                <Button
                  as={Link}
                  to="/project"
                  variant="outline-light"
                  className="cv-button"
                >
                  Projets
                </Button>
              </div>
            </div>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
              <img
                src={currentImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: "12px",
                  cursor: "pointer"
                }}
                onClick={handleKarateClick}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
