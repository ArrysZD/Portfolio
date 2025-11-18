import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// 🔎 Images provisoires (tu pourras les remplacer par tes screenshots)
import cowsay from "../../Assets/Projects/Cowsay.png";
import hanoi from "../../Assets/Projects/tour.png";
import gestion from "../../Assets/Projects/gestion.png";
import tetravex from "../../Assets/Projects/tetravex.png";
import interpreteur from "../../Assets/Projects/interpreteur.png";
import IA from "../../Assets/Projects/ia.png";
import Ocaml from "../../Assets/Projects/Ocaml.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">projets</strong> récents
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets académiques et personnels. Les dépôts GitHub
          contiennent le code et les instructions d’exécution.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1) Projet Cowsay */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cowsay}
              title="Cowsay (C)"
              description="Ré-implémentation de l’outil Cowsay en langage C : parsing des arguments, sélection d’ASCII-art, messages multi-lignes et gestion propre des erreurs."
              ghLink="https://github.com/ArrysZD/Projet-Cowsay"
              stack={["C", "CLI", "Parsing"]}
            />
          </Col>


          {/* 2) Tours de Hanoï */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hanoi}
              title="Les tours de Hanoï"
              description="Implémentation du classique récursif : affichage des mouvements, vérification de la validité, variantes possibles (compteur, mesure de temps, UI simple)."
              ghLink="https://github.com/ArrysZD/Les-tours-de-Hanoi"
              stack={["Python", "Algo", "Récursivité"]}
            />
          </Col>

          {/* 3) Gestion étudiants / matières */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gestion}
              title="Gestion d’étudiants & matières"
              description="Application C en mode texte : création/édition de fiches étudiants, notes et moyennes, sauvegarde/chargement de fichiers, menus et validations robustes."
              ghLink="https://github.com/ArrysZD/Gestion-etudiants-matieres"
              stack={["C", "Fichiers", "Structures"]}
            />
          </Col>

          {/* 4) Solveur Tetravex via SAT */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tetravex}
              title="Tetravex via SAT"
              description="Traduction du puzzle Tetravex en clauses logiques (DIMACS CNF), résolution avec un solveur SAT, et génération/lecture des solutions (OCaml + Python)."
              ghLink="https://github.com/ArrysZD/Tetravex-SAT"
              stack={["OCaml", "Python", "SAT", "DIMACS"]}
            />
          </Col>
          {/* 5) Interpréteur ARM en C */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interpreteur}
              title="Interpréteur ARM en C"
              description="Un mini-interpréteur écrit en C permettant d’analyser, interpréter et exécuter un langage assembleur simplifié."
              ghLink="https://github.com/ArrysZD/INTERPRETEUR_ARM_EN_C"
              stack={["C", "ARM", "analyse"]}
            />
          </Col>

          {/* 6) Intro machine learning */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IA}
              title="Image Processing with Python"
              description="L'objectif du projet est le suivant : à partir du scan d'un document papier contenant une suite de chiffres manuscrits (de 0 à 9), vous allez développer un algorithme d'intelligence artificielle capable de localiser la position des chiffres et de reconnaître chacun d'entre eux."
              ghLink="https://github.com/ArrysZD/Introduction_en_machine_learning"
              stack={["Jupyter-Notebook", "python", "HTML"]}
            />
          </Col>

          {/* 7) Intro machine learning */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ocaml}
              title=" Projet Les dames chinoises"
              description="Implémentation du jeu de Dames Chinoises avec règles des sauts distants et symétriques. Projet de modélisation et vérification des règles du jeu en OCaml."
              ghLink="https://github.com/ArrysZD/Projet_Ocaml"
              stack={["Ocaml", "Algo"]}
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
