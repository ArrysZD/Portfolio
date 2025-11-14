import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je suis <span className="purple">ZAIDI Arris</span>, étudiant en{" "}
            <span className="purple">
              Licence 3 Informatique – parcours Informatique Générale
            </span>{" "}
            à l’<span className="purple">Université Grenoble Alpes (UFR IM2AG)</span>.
            <br />
            Cette formation me permet de consolider mes bases scientifiques et
            techniques, tout en approfondissant les domaines clés de
            l’informatique moderne. Parmi les principales unités d’enseignement
            étudiées :
          </p>

          <ul style={{textAlign: "justify", marginTop: 10 }}>
            <li>Algorithmique et analyse de la complexité</li>
            <li>
              Théorie des graphes, structures de données et résolution de problèmes
            </li>
            <li>
              <b>Architectures, systèmes et réseaux</b>
            </li>
            <li>
              Automates, langages et compilation
            </li>
            <li>
              Introduction à l’<b>intelligence artificielle</b> et à l’apprentissage
              automatique
            </li>
            <li>
              Probabilités et <b>statistiques appliquées</b>
            </li>
            <li>
              Programmation en <b>C, Python, OCaml</b> et développement de
              bases de données (<b>SQL / SQLite / Oracle</b>)
            </li>
            <li>
              Méthodologie et <b>projet informatique</b>
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginTop: 12 }}>
            Parcours antérieur :  Premiére année d’ingénierie en informatique <b>Université de Béjaïa</b>,
            <b> baccalauréat en sciences expérimentales</b> (mention<b> Trés bien</b>).
          </p>

          <p style={{ color: "rgb(155 126 172)", marginTop: 12 }}>
            Objectif : développer une expertise solide en{" "}
            <b>cybersécurité</b>, tout en gardant une ouverture sur le{" "}
            <b>développement logiciel</b> et l’<b>intelligence artificielle</b>.
          </p>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
