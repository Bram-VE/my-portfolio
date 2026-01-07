import "../styles/skills.css";
import { useState } from "react";
import ItchIcon from "../components/ItchIcon";
import DotNetIcon from "../assets/svgs/DotNetIcon.jsx";
import CSharpIcon from "../assets/svgs/CsharpIcon.jsx";
import JavaScriptIcon from "../assets/svgs/JavaScriptIcon.jsx";
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
    { name: "Javascript", icon: <JavaScriptIcon />, color: "#b06c17ff" },
    { name: "Python", icon: <PythonIcon />, color: "#112f45ff" },
    ],
  Tools: [
    { name: "React", icon: <ReactIcon />, color: "#1892b3ff" },
    { name: "Git", icon: <GitIcon />, color: "#fecdc2ff" },
    { name: "Flutter", icon: <FlutterIcon />, color: "#1f2d39ff" },
  ],
  GameDev: [
    { name: "Unity", icon: <UnityIcon />, color: "#555555" }, 
    { name: "Godot", icon: <GodotIcon />, color: "#123652ff" },
    { name: "Pixel Art", icon: <AsepriteIcon />, color: "#3f3332ff" },
    { name: "Itch.io", icon: <ItchIcon />, color: "#FF5A5F" },
  ],
  SoftSkills: [
    { name: "Social / Open", icon: <SocialIcon />, color: "#5b72d9ff" },      
    { name: "Structured", icon: <StructuredIcon />, color: "#865c0eff" },       
    { name: "Driven", icon: <DrivenIcon />, color: "#278032ff" },            
  ],
};


export default function ProfileSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const allSkills = Object.values(SKILL_CATEGORIES).flat();
  
  // Generate stable random positions for each skill (only once)
  const [skillPositions] = useState(() => {
    return allSkills.map(() => ({
      x: Math.floor(Math.random() * 80) + 10,
      y: Math.floor(Math.random() * 60) + 10,
      duration: Math.random() * 8 + 12, // 12s to 20s (slower)
      delay: Math.random() * 5
    }));
  });

  return (
    <div className="skills-card fadeIn">
        <h3>Skills</h3>

        {/* CATEGORY CONTROLS */}
        <div className="skill-categories fadeIn">

            {/* DESKTOP / TABLET BUTTONS */}
            <div className="large-only">
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
                    {cat}
                </button>
                ))}
            </div>

            {/* MOBILE DROPDOWN */}
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

        {/* FLOATING SKILLS */}
        <div className="skills-bubble-container">
        {allSkills.map((skill, index) => {
            const isActive =
            activeCategory === "All" ||
            SKILL_CATEGORIES[activeCategory].includes(skill);
            const position = skillPositions[index];
            return (
            <div
                key={skill.name}
                className={`skill-bubble ${isActive ? "active" : "inactive"}`}
                style={{
                "--color": skill.color,
                left: `${position.x}%`,
                top: `${position.y}%`,
                animationDuration: `${position.duration}s`,
                animationDelay: `${position.delay}s`,
                }}
            >
                {skill.icon || skill.name[0]}
                <span className="skill-name">{skill.name}</span>
            </div>
            );
        })}
        </div>
    </div>
  );
}