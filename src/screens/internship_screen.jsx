import "../styles/base.css";
import "../styles/internship.css";
import "../styles/animations.css";

import { useEffect } from "react";
import { FaDownload, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

export default function InternshipScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="internship-page">
      <Navbar />

      <section className="internship-hero fadeIn">
        <div className="internship-hero-content">
          <div className="internship-hero-copy">
            <p className="section-kicker">Internship</p>
            <h1>dotNET lab - Appie's Legobib</h1>
            <p>
              During my internship at dotNET lab, I worked on Appie's Legobib: a
              reservation and inventory system for a Lego library used by children
              in long-term hospital care.
            </p>
          </div>

          <div className="internship-brand-card">
            <img
              src="/stage/DotNETlab_Logo.gif"
              alt="dotNET lab logo"
              className="internship-brand-logo"
            />
            <div>
              <h2>About dotNET lab</h2>
              <p>
                dotNET lab is an IT consultancy bureau that helps KMO's and
                mid-market organizations with software, AI, and IT teams. They
                combine consultancy, managed services, training, and Try & Hire
                to help clients build practical solutions and innovate safely.
              </p>
            </div>
          </div>
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
