import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

/**
 * Carte de projet réutilisable
 * Props :
 * - imgPath: string (chemin de l’image)
 * - title: string (titre du projet)
 * - description: string (petit texte)
 * - ghLink: string (URL GitHub)
 * - demoLink: string (URL démo, optionnel)
 * - isBlog: bool (si true, le bouton GitHub affiche “Blog”)
 * - stack: array<string> (liste courte des technos, optionnel)
 */
function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog,
  stack = [],
}) {
  return (
    <Card className="project-card-view h-100">
      {imgPath && (
        <Card.Img
          variant="top"
          src={imgPath}
          alt={`Illustration du projet ${title}`}
          loading="lazy"
        />
      )}

      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>

        {/* Badges de stack (optionnels) */}
        {stack.length > 0 && (
          <div className="mb-2">
            {stack.map((tech, idx) => (
              <Badge
                key={`${title}-tech-${idx}`}
                bg="secondary"
                className="me-1 mb-1"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        <div className="mt-auto">
          {/* Bouton GitHub ou Blog */}
          {ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isBlog ? "Ouvrir l’article de blog" : "Ouvrir le dépôt GitHub"}
            >
              <BsGithub className="me-2" />
              {isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {/* Bouton Démo si fourni et si ce n’est pas un blog */}
          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-2"
              aria-label="Ouvrir la démo du projet"
            >
              <CgWebsite className="me-2" />
              Démo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

ProjectCards.propTypes = {
  imgPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string,
  demoLink: PropTypes.string,
  isBlog: PropTypes.bool,
  stack: PropTypes.arrayOf(PropTypes.string),
};

ProjectCards.defaultProps = {
  imgPath: "",
  ghLink: "",
  demoLink: "",
  isBlog: false,
  stack: [],
};

export default ProjectCards;
