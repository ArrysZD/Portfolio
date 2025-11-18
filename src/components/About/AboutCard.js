import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Étudiant en <span className="purple">Licence 3 Informatique</span> à
            l’<span className="purple">Université Grenoble Alpes</span>,
            je développe un fort intérêt pour l’algorithmique, les systèmes et
            la cybersécurité.
            Je partage ici mes projets, mon parcours académique et mon évolution
            dans le domaine de l’informatique.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
