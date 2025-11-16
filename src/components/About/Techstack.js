import React from "react";
import { Col, Row } from "react-bootstrap";

import Python from "../../Assets/TechIcons/Python.svg";
import C from "../../Assets/TechIcons/C.svg";
import OCaml from "../../Assets/TechIcons/OCaml.svg";
import ARM from "../../Assets/TechIcons/ARM.svg";
import Bash from "../../Assets/TechIcons/Bash.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";                 // SQL / SQLite
import OracleDev from "../../Assets/TechIcons/SQL Developer.svg";  // Oracle (SQL Developer)
import HTML5 from "../../Assets/TechIcons/HTML5.svg";
import CSS3 from "../../Assets/TechIcons/CSS3.svg";
import JavaScript from "../../Assets/TechIcons/javascript.svg"; // JavaScript
import Java from "../../Assets/TechIcons/Java.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" className="tech-icon-images" />
        <div className="tech-icons-text">Python</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" className="tech-icon-images" />
        <div className="tech-icons-text">Java</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C" className="tech-icon-images" />
        <div className="tech-icons-text">C</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={OCaml} alt="OCaml" className="tech-icon-images" />
        <div className="tech-icons-text">OCaml</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ARM} alt="ARM (ASM)" className="tech-icon-images" />
        <div className="tech-icons-text">   ARM (ASM)  </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Bash} alt="Bash" className="tech-icon-images" />
        <div className="tech-icons-text">Bash</div>
      </Col>

      {/* SQL / SQLite */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL / SQLite" className="tech-icon-images" />
        <div className="tech-icons-text">SQL / SQLite</div>
      </Col>

      {/* javascript */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={JavaScript} alt="JavaScript" className="tech-icon-images" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      {/* Oracle via SQL Developer */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={OracleDev} alt="Oracle" className="tech-icon-images" />
        <div className="tech-icons-text">Oracle</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML5} alt="HTML5" className="tech-icon-images" />
        <div className="tech-icons-text">HTML5</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS3} alt="CSS3" className="tech-icon-images" />
        <div className="tech-icons-text">CSS3</div>
      </Col>
    </Row>
  );
}

export default Techstack;

