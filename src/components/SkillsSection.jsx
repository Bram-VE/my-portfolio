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
import {
  SiAngular,
  SiCss3,
  SiDocker,
  SiFirebase,
  SiGnubash,
  SiHtml5,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiOpenjdk,
} from "react-icons/si";

const CATEGORY_LABELS = {
  Programming: "Programming",
  Frameworks: "Frameworks",
  Tools: "Tools",
  GameDevelopment: "Game Development",
  SoftSkills: "Soft skills",
};

const SKILL_CATEGORIES = {
  Programming: [
    { name: ".NET", icon: <DotNetIcon />, color: "#512BD4", description: "A proficient backend choice for building APIs, app logic, and reliable application services.", siteUrl: "https://dotnet.microsoft.com/" },
    { name: "C#", icon: <CSharpIcon />, color: "#c2c9e4ff", description: "A language I mainly use through Unity for gameplay scripts and game logic.", siteUrl: "https://learn.microsoft.com/dotnet/csharp/" },
    { name: "Python", icon: <PythonIcon />, color: "#204160ff", description: "Comfortable for scripting, prototypes, and small tools.", siteUrl: "https://www.python.org/" },
    { name: "HTML/CSS", icon: <><SiHtml5 /><SiCss3 /></>, color: "#e34f26", description: "Core building blocks for structured and responsive interfaces." },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6", description: "Useful for typed frontend and application code with better structure.", siteUrl: "https://www.typescriptlang.org/" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", description: "A utility-first CSS framework for fast interface styling.", siteUrl: "https://tailwindcss.com/" },
  ],
  Frameworks: [
    { name: "React", icon: <ReactIcon />, color: "#61DAFB", description: "Building frontends with components and reusable UI.", siteUrl: "https://react.dev/" },
    { name: "Angular", icon: <SiAngular />, color: "#dd0031", description: "Structured frontend development for larger web applications.", siteUrl: "https://angular.dev/" },
    { name: "Flutter", icon: <FlutterIcon />, color: "#073860ff", description: "Cross-platform app development from one codebase.", siteUrl: "https://flutter.dev/" },
  ],
  Tools: [
    { name: "Git", icon: <GitIcon />, color: "#6a2216ff", description: "Version control for collaboration, branches, and commits.", siteUrl: "https://git-scm.com/" },
    { name: "Firebase", icon: <SiFirebase />, color: "#ffca28", description: "Backend services for auth, databases, and app data.", siteUrl: "https://firebase.google.com/" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ed", description: "Container tooling for reproducible development and deployment.", siteUrl: "https://www.docker.com/" },
  ],
  GameDevelopment: [
    { name: "Unity", icon: <UnityIcon />, color: "#777", description: "Engine for 2D/3D games, prototyping, and gameplay systems.", siteUrl: "https://unity.com/" },
    { name: "Godot", icon: <GodotIcon />, color: "#1a4465ff", description: "My preferred engine for larger game projects, gameplay systems, and long-term indie work.", siteUrl: "https://godotengine.org/" },
    { name: "Pixel Art", icon: <AsepriteIcon />, color: "#3f3332", description: "A visual style for sprites, icons, and small assets.", siteUrl: "https://www.aseprite.org/" },
    { name: "Itch.io", icon: <ItchIcon />, color: "#FF5A5F", description: "A platform for publishing prototypes and small games.", siteUrl: "https://itch.io/" },
  ],
  SoftSkills: [
    { name: "Social / Open", icon: <SocialIcon />, color: "#5b72d9", description: "I communicate easily and enjoy working with others." },
    { name: "Structured", icon: <StructuredIcon />, color: "#865c0e", description: "I like clear steps, good overview, and clean code." },
    { name: "Driven", icon: <DrivenIcon />, color: "#278032", description: "I pick up what is needed quickly and work with focus." },
  ],
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(".NET");

  const allSkills = Object.entries(SKILL_CATEGORIES).flatMap(
    ([category, skills]) =>
      skills.map((skill) => ({ ...skill, category }))
  );

  const listSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  const activeSkill =
    allSkills.find((skill) => skill.name === hoveredSkill) ||
    allSkills.find((skill) => skill.name === selectedSkill) ||
    allSkills[0];

  const maxRows = 6;
  const numCols = Math.ceil(listSkills.length / maxRows);
  const columns = Array.from({ length: numCols }, (_, i) =>
    listSkills.slice(i * maxRows, i * maxRows + maxRows)
  );

  return (
    <section className="skills-card fadeIn" aria-labelledby="skills-title">
      <div className="skills-header">
        <p className="section-kicker">Technical Stack</p>
        <h3 id="skills-title">Skills</h3>
      </div>

      <div className="skill-categories">
        <div className="button-group large-only">
          <button
            className={activeCategory === "All" ? "active" : "unactive"}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>

          {Object.keys(SKILL_CATEGORIES).map((cat) => (
            <button
                key={cat}
                className={activeCategory === cat ? "active" : "unactive"}
                onClick={() => setActiveCategory(cat)}
              >
                {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        <div className="small-only mobile-small-only">
          <select
            className="select-control skill-dropdown"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            <option value="All">All</option>
            {Object.keys(SKILL_CATEGORIES).map((cat) => (
              <option key={cat} value={cat}>
                {CATEGORY_LABELS[cat]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="skills-layout">
        <div className="skills-main-row">
          <div className="skills-list">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="skills-column">
                {col.map((skill) => (
                  <button
                    key={skill.name}
                    className={`skills-list-item ${
                      hoveredSkill === skill.name ? "hovered" : ""
                    } ${selectedSkill === skill.name ? "selected" : ""}`}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => setSelectedSkill(skill.name)}
                    type="button"
                  >
                    <span
                      className="skills-list-dot"
                      style={{ background: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </button>
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
                  onClick={() => !inactive && setSelectedSkill(skill.name)}
                >
                  <div className="bubble-dot">{skill.icon}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="skills-context-card">
          <p className="skills-context-label">{CATEGORY_LABELS[activeSkill.category] ?? activeSkill.category}</p>
          {activeSkill ? (
            <>
              <div className="skills-context-header">
                <span
                  className="skills-context-dot"
                  style={{ background: activeSkill.color }}
                >
                  {activeSkill.icon}
                </span>
                <div>
                  <h4>{activeSkill.name}</h4>
                  <p>{CATEGORY_LABELS[activeSkill.category] ?? activeSkill.category}</p>
                </div>
              </div>
              <p className="skills-context-text">{activeSkill.description}</p>
              {activeSkill.siteUrl ? (
                <a
                  className="skills-context-link"
                  href={activeSkill.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit official site
                </a>
              ) : null}
            </>
          ) : (
            <p className="skills-context-text">Hover or tap a skill to see more context.</p>
          )}
        </div>
      </div>
    </section>
  );
}
