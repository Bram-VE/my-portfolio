import "../styles/experience.css";

const EXPERIENCES = [
  {
    role: "Freelance Game Developer",
    org: "Various Indie Projects",
    period: "2023 - Present",
    summary: "Indie game development",
    details: [
      "Designed and programmed small indie games",
      "Created pixel-art assets and UI",
      "Handled builds, testing, and releases",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <div className="experience-card fadeIn">
      <h3>Work Experience</h3>

      <p className="experience-note">
        As a student, I am continuously building my skills and expect to gain
        more professional experience in the coming years after graduation.
      </p>

      <div className="experience-grid">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={exp.role}
            className="experience-tile open"
            style={{
              "--flash-delay": `${index * 0.5}s`,
              "--flash-duration": "6s",
            }}
          >
            <div className="experience-top">
              <h4>{exp.role}</h4>
            </div>

            <span className="experience-period">{exp.period}</span>

            <p className="experience-org">{exp.org}</p>

            <p className="experience-summary">
              <span className="prompt">&gt;</span> {exp.summary}
            </p>

            <div className="experience-details">
              <ul>
                {exp.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
