import "../styles/profile-section.css";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "./ExperienceSection";

export default function ProfileSection() {
  return (
    <div id="about" className="profile-section">
      <section>
        <h2 className="section-title fadeIn">About Me & Experience</h2>
        <div className="profile-container">
          <SkillsSection />
          <div className="education-experience">
            <EducationSection />
            <ExperienceSection />
          </div>
        </div>
      </section>
    </div>
  );
}
