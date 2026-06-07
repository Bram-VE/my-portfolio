import "../styles/base.css";
import "../styles/internship.css";
import "../styles/animations.css";

import { useEffect } from "react";
import {
  FaCode,
  FaDownload,
  FaExternalLinkAlt,
  FaFilePdf,
  FaLayerGroup,
  FaUsers,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import landingPageImage from "../assets/images/stage/landing_page.png";
import detailPageImage from "../assets/images/stage/detail_set_page.png";

const documents = [
  {
    title: "Project Plan",
    file: "/stage/ProjectPlan.pdf",
    description:
      "Planning, scope, goals, and the way the internship project was approached.",
  },
  {
    title: "Realisatiedocument",
    file: "/stage/Realisatiedocument.pdf",
    description:
      "The realisation document with the technical work, implementation choices, and delivered result.",
  },
  {
    title: "Reflectiedocument",
    file: "/stage/Reflectiedocument.pdf",
    description:
      "Reflection on the internship process, collaboration, growth, and what I learned.",
  },
];

const highlights = [
  {
    icon: FaUsers,
    title: "Built for children and caregivers",
    description:
      "A system designed to be easy to use for people who want to quickly find, reserve, or manage a set.",
  },
  {
    icon: FaCode,
    title: "Backend focus",
    description:
      "I worked mainly on the .NET side and helped build the technical structure of the project.",
  },
  {
    icon: FaLayerGroup,
    title: "From idea to a working product",
    description:
      "The project evolved into a practical tool with clear flows and a polished interface.",
  },
];

export default function InternshipScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="internship-page">
      <Navbar />

      <section className="internship-hero fadeIn">
        <div className="internship-hero-content foldOpen">
          <div className="internship-hero-copy">
            <p className="section-kicker">Internship</p>
            <h1>dotNET lab - Appie's Legobib</h1>
            <p>
              During my internship at dotNET lab, I worked on Appie's Legobib: a
              reservation and inventory system for a Lego library used by children
              in long-term hospital care.
            </p>

            <div className="internship-meta-row">
              <span className="internship-meta-pill">.NET backend</span>
              <span className="internship-meta-pill">UX for a real audience</span>
              <span className="internship-meta-pill">Team project</span>
            </div>
          </div>

          <div className="internship-hero-media" aria-hidden="true">
            <img
              src={landingPageImage}
              alt=""
              className="internship-hero-image internship-hero-image-large"
            />
            <img
              src={detailPageImage}
              alt=""
              className="internship-hero-image internship-hero-image-small"
            />
          </div>
        </div>
      </section>

      <section className="internship-highlights">
        <div className="highlight-grid">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <article className="highlight-card" key={highlight.title}>
                <div className="highlight-icon-wrap" aria-hidden="true">
                  <Icon className="highlight-icon" />
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="internship-grid">
        <article className="internship-panel">
          <h2>What I Worked On</h2>
          <p>
            My work focused on building reliable application features for a
            real client project. I worked mainly on the .NET backend, helped
            shape admin workflows, and contributed to the technical structure
            behind reservations, inventory, authentication, QR flows and Excel
            support.
          </p>
          <p>
            I also took responsibility inside the team by helping coordinate
            planning, communication, and delivery. That made the internship more
            than only a coding assignment: it was also a practical lesson in
            teamwork, ownership, and building software people can actually use.
          </p>
        </article>

        <article className="internship-panel">
          <h2>How It Was For Me</h2>
          <p>
            The internship was a valuable step from school projects toward a
            more professional way of working. I learned how important clear
            communication, realistic scope, and maintainable code are when
            several people work on the same product.
          </p>
          <p>
            It confirmed that I enjoy backend development, especially with
            .NET, and that I like working on software that has a practical
            purpose. The project helped me grow technically, but also made me
            more confident in taking initiative within a team.
          </p>
        </article>
      </section>

      <section className="internship-documents" aria-labelledby="documents-title">
        <div className="internship-section-header">
          <p className="section-kicker">Documents</p>
          <h2 id="documents-title">Internship Documents</h2>
        </div>

        <div className="document-grid">
          {documents.map((document) => (
            <article className="document-card" key={document.file}>
              <FaFilePdf className="document-icon" aria-hidden="true" />
              <div>
                <h3>{document.title}</h3>
                <p>{document.description}</p>
              </div>
              <div className="document-actions">
                <a href={document.file} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt aria-hidden="true" />
                  Open
                </a>
                <a href={document.file} download>
                  <FaDownload aria-hidden="true" />
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
