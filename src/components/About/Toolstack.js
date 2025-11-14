import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import git from "../../Assets/TechIcons/Git.svg";
import linux from "../../Assets/TechIcons/Linux.svg"; // ou Ubuntu.svg si tu veux
import chrome from "../../Assets/TechIcons/Google Chrome.svg"; // sans espace dans le nom du fichier
import dbBrowser from "../../Assets/TechIcons/SQL Developer.svg"; // ou SQL.svg si tu préfères
import rstudio from "../../Assets/TechIcons/RStudio.svg";
import virtualbox from "../../Assets/TechIcons/Virtualbox_logo.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={linux} alt="Linux / Ubuntu" className="tech-icon-images" />
        <div className="tech-icons-text">Linux / Ubuntu</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={chrome} alt="Google Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={dbBrowser}
          alt="DB Browser for SQLite"
          className="tech-icon-images"
        />
        <div className="tech-icons-text">DB Browser for SQLite</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={rstudio} alt="RStudio" className="tech-icon-images" />
        <div className="tech-icons-text">RStudio</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={virtualbox} alt="VirtualBox" className="tech-icon-images" />
        <div className="tech-icons-text">VirtualBox</div>
      </Col>
    </Row>
  );
}

export default Toolstack;

