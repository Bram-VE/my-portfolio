import { useState } from "react";
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
  {
    role: "Logistical Support",
    org: "Woonzorgcentrum Sint-Barbara",
    period: "2023 - Present (Holidays)",
    summary: "Operational and care assistance",
    details: [
      "Prepared resident rooms for sleeping",
      "Help giving food to residents",
      "Worked efficiently in care-focused environments",
    ],
  },
  {
    role: "Road Construction Calculator",
    org: "Stadsbader",
    period: "Aug 2022 - Aug 2023",
    summary: "Cost estimation & planning",
    details: [
      "Calculated materials and project costs",
      "Worked on large-scale infrastructure budgets",
      "Handled estimates worth millions of euros",
    ],
  },
];

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="experience-card fadeIn">
      <h3>Work Experience</h3>

      <div className={`experience-grid ${openIndex !== null ? "has-open" : ""}`}>
        {EXPERIENCES.map((exp, index) => (
          <div
            key={exp.role}
            className={`experience-tile ${openIndex === index ? "open" : "closed"}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{ "--flash-delay": `${index * 0.5}s`, "--flash-duration": "6s" }}
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
