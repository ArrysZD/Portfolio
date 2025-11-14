import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI <span className="purple">ME PRÉSENTER</span>
            </h1>
            <p className="home-about-body">
              Je m'appelle <b className="purple">ZAIDI Arris</b>, étudiant en{" "}
              <b className="purple">Licence 3 Informatique</b> à l'
              <b className="purple">Université Grenoble Alpes</b>.
              <br />
              <br />
              Passionné par la <b className="purple">cybersécurité</b>, je
              m'intéresse aussi au <b className="purple">développement
              logiciel</b> et à l'<b className="purple">intelligence
              artificielle</b>. Mon objectif est de devenir un ingénieur capable
              d’évoluer dans plusieurs domaines techniques, tout en gardant un
              fort intérêt pour la sécurité informatique et les systèmes.
              <br />
              <br />
              Je travaille principalement avec{" "}
              <i>
                <b className="purple">
                  C, Python, OCaml, ARM (assembleur) et Bash
                </b>
              </i>
              , et j’ai de l’expérience en bases de données{" "}
              <i>
                <b className="purple">SQL / SQLite / Oracle</b>
              </i>
              . Côté Web, je maîtrise{" "}
              <i>
                <b className="purple">HTML &amp; CSS</b>
              </i>{" "}
              pour la conception d’interfaces simples et efficaces.
              <br />
              <br />
              J’ai participé à plusieurs projets, dont un{" "}
              <b className="purple">solveur Tetravex via SAT</b> (OCaml + Python),
              une <b className="purple">application de gestion de matériel</b>,
              un <b className="purple">interpréteur ARM</b>, un{" "}
              <b className="purple">gestionnaire d’étudiants</b> et un{" "}
              <b className="purple">jeu des Tours de Hanoï</b>.
              <br />
              <br />
              En dehors de l’informatique, je suis{" "}
              <b className="purple">sportif de haut niveau en karaté</b> —
              champion de France universitaire 🥇, troisième en Coupe de France 🥉
              et médaillé sur plusieurs compétitions nationales et
              internationales. Cette discipline m’a appris la{" "}
              <b className="purple">rigueur, la persévérance et la concentration</b>.
              <br />
              <br />
              Au quotidien, j’utilise{" "}
              <b className="purple">
                VS Code, Git, Linux/Ubuntu, DB Browser for SQLite, RStudio et
                VirtualBox
              </b>
              , avec une priorité donnée à la qualité, la clarté et la sécurité
              du code.
            </p>

          </Col>

          {/* Image avatar */}
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

