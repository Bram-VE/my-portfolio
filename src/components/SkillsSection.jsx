import "../styles/skills.css";
import { useState } from "react";

import ItchIcon from "../components/ItchIcon";
import DotNetIcon from "../assets/svgs/DotNetIcon.jsx";
import CSharpIcon from "../assets/svgs/CSharpIcon.jsx";
import PythonIcon from "../assets/svgs/PythonIcon.jsx";
import ReactIcon from "../assets/svgs/ReactIcon.jsx";
import GitIcon from "../assets/svgs/GitIcon.jsx";
import FlutterIcon from "../assets/svgs/FlutterIcon.jsx";
import GodotIcon from "../assets/svgs/GodotIcon.jsx";
import UnityIcon from "../assets/svgs/UnityIcon.jsx";
import AsepriteIcon from "../assets/svgs/AsepriteIcon.jsx";
import SocialIcon from "../assets/svgs/SocialIcon.jsx";
import StructuredIcon from "../assets/svgs/StructuredIcon.jsx";
import DrivenIcon from "../assets/svgs/DrivenIcon.jsx";

const SKILL_CATEGORIES = {
  Programming: [
    { name: ".NET", icon: <DotNetIcon />, color: "#512BD4" },
    { name: "C#", icon: <CSharpIcon />, color: "#c2c9e4ff" },
    { name: "Python", icon: <PythonIcon />, color: "#204160ff" },
  ],
  Tools: [
    { name: "React", icon: <ReactIcon />, color: "#61DAFB" },
    { name: "Git", icon: <GitIcon />, color: "#6a2216ff" },
    { name: "Flutter", icon: <FlutterIcon />, color: "#073860ff" },
  ],
  GameDev: [
    { name: "Unity", icon: <UnityIcon />, color: "#777" },
    { name: "Godot", icon: <GodotIcon />, color: "#1a4465ff" },
    { name: "Pixel Art", icon: <AsepriteIcon />, color: "#3f3332" },
    { name: "Itch.io", icon: <ItchIcon />, color: "#FF5A5F" },
  ],
  SoftSkills: [
    { name: "Social / Open", icon: <SocialIcon />, color: "#5b72d9" },
    { name: "Structured", icon: <StructuredIcon />, color: "#865c0e" },
    { name: "Driven", icon: <DrivenIcon />, color: "#278032" },
  ],
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const allSkills = Object.entries(SKILL_CATEGORIES).flatMap(
    ([category, skills]) =>
      skills.map((skill) => ({ ...skill, category }))
  );

  const listSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  // Columns for desktop
  const maxRows = 7;
  const numCols = Math.ceil(listSkills.length / maxRows);
  const columns = Array.from({ length: numCols }, (_, i) =>
    listSkills.slice(i * maxRows, i * maxRows + maxRows)
  );

  return (
    <section className="skills-card fadeIn">
      <h3>Skills</h3>

      <div className="skill-categories">
        <div className="button-group large-only">
          <div>
            <button
              className={activeCategory === "All" ? "active" : "unactive"}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>
          </div>

          {Object.keys(SKILL_CATEGORIES).map((cat) => (
            <div key={cat}>
            <button
                className={activeCategory === cat ? "active" : "unactive"}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
            </button>
            </div>
          ))}
        </div>

        <div className="small-only mobile-small-only">
          <select
            className="skill-dropdown"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            <option value="All">All</option>
            {Object.keys(SKILL_CATEGORIES).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="skills-layout">
        <div className="skills-list">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="skills-column">
              {col.map((skill) => (
                <div
                  key={skill.name}
                  className={`skills-list-item ${
                    hoveredSkill === skill.name ? "hovered" : ""
                  }`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span
                    className="skills-list-dot"
                    style={{ background: skill.color }}
                  >
                    {skill.icon}
                  </span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="skills-bubble-container large-only">
          {allSkills.map((skill, index) => {
            const inactive =
              activeCategory !== "All" &&
              skill.category !== activeCategory;

            return (
              <div
                key={skill.name}
                className={`skill-bubble ${
                  hoveredSkill === skill.name ? "hovered" : ""
                } ${inactive ? "inactive" : "active"}`}
                style={{
                  "--color": skill.color,
                  left: `${15 + (index * 19) % 70}%`,
                  top: `${20 + (index * 23) % 60}%`,
                  animationDuration: `${16 + index * 2}s`,
                }}
                onMouseEnter={() => !inactive && setHoveredSkill(skill.name)}
                onMouseLeave={() => !inactive && setHoveredSkill(null)}
              >
                <div className="bubble-dot">{skill.icon}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
