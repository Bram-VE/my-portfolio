import "../styles/education.css";

export default function EducationSection() {
  return (
    <div className="education-card fadeIn">
      <h3>Education</h3>

      <div className="education-timeline">
        <div className="education-item">
          <span className="edu-dot"></span>
          <div className="edu-content">
            <h4>Application Development – Bachelor</h4>
            <p className="edu-school">Thomas More Geel · Belgium</p>
            <span className="edu-date">2023 – Present</span>
          </div>
        </div>

        <div className="education-item">
          <span className="edu-dot"></span>
          <div className="edu-content">
            <h4>Construction – Bachelor</h4>
            <p className="edu-school">Thomas More Geel · Belgium</p>
            <span className="edu-date">2020 – 2023</span>
          </div>
        </div>

        <div className="education-item">
          <span className="edu-dot"></span>
          <div className="edu-content">
            <h4>Wood & Construction</h4>
            <p className="edu-school">Damiaan Instituut Aarschot · Belgium</p>
            <span className="edu-date">2016 – 2020</span>
          </div>
        </div>
      </div>
    </div>
  );
}
