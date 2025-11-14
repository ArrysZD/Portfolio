import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/CV_Arris_ZAIDI.pdf";   // 👈 déplace ton import ici tout en haut

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages: n }) => setNumPages(n);

  // échelle responsive : grand écran vs mobile
  const scale = width > 992 ? 1.5 : width > 768 ? 1.2 : 0.6;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            download="CV_Arris_ZAIDI.pdf"
            style={{ maxWidth: "280px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger mon CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div style={{ color: "white" }}>Chargement du CV…</div>}
            error={<div style={{ color: "white" }}>Impossible d’afficher le CV.</div>}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={scale}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            download="CV_Arris_ZAIDI.pdf"
            style={{ maxWidth: "280px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger mon CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
