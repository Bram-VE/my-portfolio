import "../styles/education.css";

const EDUCATION = [
  {
    degree: "Application Development",
    type: "Bachelor",
    school: "Thomas More Geel",
    location: "Belgium",
    period: "2023 - Present",
    status: "Current",
    focus: ["Full-stack development", "Software architecture", "Team projects"],
  },
  {
    degree: "Construction",
    type: "Bachelor",
    school: "Thomas More Geel",
    location: "Belgium",
    period: "2020 - 2023",
    status: "Completed",
    focus: ["Technical planning", "Problem solving", "Project coordination"],
  },
];

export default function EducationSection() {
  return (
    <section className="education-card fadeIn" aria-labelledby="education-title">
      <div className="education-header">
        <p className="section-kicker">Learning Path</p>
        <h3 id="education-title">Education</h3>
      </div>

      <div className="education-timeline">
        {EDUCATION.map((item) => (
          <article className="education-item" key={item.degree}>
            <span className="edu-dot" aria-hidden="true"></span>

            <div className="edu-content">
              <div className="edu-title-row">
                <div>
                  <p className="edu-date">{item.period}</p>
                  <h4>{item.degree}</h4>
                </div>
                <span className="edu-status">{item.status}</span>
              </div>

              <p className="edu-school">
                {item.type} at {item.school} - {item.location}
              </p>

              <div className="edu-focus-list" aria-label={`${item.degree} focus areas`}>
                {item.focus.map((focus) => (
                  <span key={focus}>{focus}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
