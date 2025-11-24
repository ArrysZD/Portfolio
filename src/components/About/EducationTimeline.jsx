import React from "react";

const formations = [
  {
    periode: "2025 – 2026",
    titre: "Licence Informatique – L3",
    ecole: "Université Grenoble Alpes (UFR IM2AG)",
    lieu: "Grenoble, France",
    type: "fr",
    color: "violet",
    description:
      "Troisième année de licence : algorithmique avancée, automates, compilation, IA, systèmes et bases de données. Orientation progressive vers la cybersécurité et le développement logiciel.",
    tags: ["Algorithmique", "Automates", "Architecture machine" ]
  },
  {
    periode: "2024 – 2025",
    titre: "Licence Informatique – L2",
    ecole: "Université Grenoble Alpes",
    lieu: "Grenoble, France",
    type: "fr",
    color: "blue",
    description:
      "Approfondissement en algorithmique, structures de données, théorie des graphes, logique, probabilités et statistiques.",
    tags: ["C", "Python", "Graphes", "Statistiques", "Automates"]
  },
  {
    periode: "2023 – 2024",
    titre: "Licence Informatique – L1",
    ecole: "Université Grenoble Alpes ",
    lieu: "Grenoble, France",
    type: "fr",
    color: "green",
    description:
      "Bases en programmation, mathématiques discrètes, logique et architecture des ordinateurs.",
    tags: ["Python", "Algèbre", "Logique"]
  },
  {
    periode: "2022 – 2023",
    titre: "1ère année d’ingénierie en informatique",
    ecole: "Université de Béjaïa",
    lieu: "Béjaïa, Algérie",
    type: "intl",
    color: "orange",
    description:
      "Formation en programmation (C, Python), systèmes, mathématiques pour l’ingénierie et architecture informatique.",
    tags: ["C", "Python", "Systèmes"]
  },
  {
    periode: "2021 – 2022",
    titre: "Baccalauréat – Sciences expérimentales (Mention Très Bien)",
    ecole: "Lycée Khatri Omar",
    lieu: "Algérie",
    type: "intl",
    color: "yellow",
    description:
      "Parcours scientifique général : mathématiques, physique-chimie, SVT. Ouverture vers les études en sciences et technologies.",
    tags: ["Sciences", "Maths", "Physique"]
  }
];

function EducationTimeline() {
  return (
    <section id="formation" className="timeline-section">
      <h2 className="timeline-title">
        <span className="purple">Formations</span>
      </h2>

      <div className="timeline-wrapper">
        <div className="timeline-line" />

        {formations.map((f, index) => (
          <div
            key={index}
            className={`timeline-item ${f.type === "fr" ? "left" : "right"}`}
          >
            <div className={`timeline-dot dot-${f.color}`} />
            <div className="timeline-card">
              <div className="timeline-date">{f.periode}</div>
              <h3 className="timeline-titre">{f.titre}</h3>
              <h4 className="timeline-ecole">{f.ecole}</h4>
              <p className="timeline-lieu">{f.lieu}</p>
              <p className="timeline-desc">{f.description}</p>

              <div className="timeline-tags">
                {f.tags.map((tag) => (
                  <span className="timeline-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationTimeline;
