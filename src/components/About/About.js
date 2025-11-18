import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import EducationTimeline from "./EducationTimeline";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          {/* Bloc "Qui suis-je ?" */}
          <Row style={{ justifyContent: "center", padding: "10px 0 0 0" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "20px",
                paddingBottom: "10px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}>
                Qui suis-je <strong className="purple">?</strong>
              </h1>
              <AboutCard />
            </Col>

            <Col
              md={5}
              style={{ paddingTop: "40px", paddingBottom: "10px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          {/* ⚡ Formations juste après, sans vide */}
          <EducationTimeline />

          {/* Compétences */}
          <h1 className="project-heading" style={{ marginTop: "40px" }}>
            Compétences <strong className="purple">techniques</strong>
          </h1>
          <Techstack />

          {/* Outils */}
          <h1 className="project-heading">
            <strong className="purple">Outils</strong> utilisés
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </>
  );
}

export default About;
