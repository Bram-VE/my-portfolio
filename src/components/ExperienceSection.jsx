import "../styles/experience.css";

const EXPERIENCES = [
  {
    role: "Application Developer Intern",
    org: "dotNET lab",
    period: "2025 - 2026",
    label: "Internship",
    summary: "Appie's Legobib: reservation and inventory system for hospitals.",
    details: [
      "Built a reservation and inventory application",
      "Integrated Rebrickable set data",
      "Developed with a .NET backend and Angular frontend",
      "Added Zitadel authentication, QR flows, and Excel support",
      "Dockerised services and supported CI/CD delivery",
    ],
  },
  {
    role: "Freelance Game Developer",
    org: "Various Indie Projects",
    period: "2023 - Present",
    label: "Independent",
    summary: "Small indie games shaped from concept, code, art, and release.",
    details: [
      "Designed and programmed small indie games",
      "Created pixel-art assets and UI",
      "Handled builds, testing, and releases",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="experience-card fadeIn" aria-labelledby="experience-title">
      <div className="experience-header">
        <div>
          <p className="section-kicker">Career Progress</p>
          <h3 id="experience-title">Experience</h3>
        </div>
        <p className="experience-note">
          Practical work across app development, game projects, and production tooling.
        </p>
      </div>

      <div className="experience-list">
        {EXPERIENCES.map((exp) => (
          <article className="experience-item" key={exp.role}>
            <div className="experience-content">
              <div className="experience-top">
                <div>
                  <p className="experience-period">{exp.period}</p>
                  <h4>{exp.role}</h4>
                </div>
                <span className="experience-label">{exp.label}</span>
              </div>

              <p className="experience-org">{exp.org}</p>
              <p className="experience-summary">{exp.summary}</p>

              <ul className="experience-details">
                {exp.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
