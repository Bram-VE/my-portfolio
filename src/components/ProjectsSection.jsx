import "../styles/projects.css";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaGamepad,
  FaCode,
  FaGlobe,
  FaTimes,
  FaMobileAlt
} from "react-icons/fa";

import itchCover from "../assets/images/projects/itchIo_profile_cover.png";
import appiesLegobibCover from "../assets/images/projects/appies_legobib_cover.png";
import arProjectCover from "../assets/images/projects/ar_project_cover.png";
import blinkOdysseyCover from "../assets/images/projects/blink_odyssey_cover.png";
import kwartelBoekCover from "../assets/images/projects/kwartel_boek_cover.png";

const projects = [
  {
    id: 1,
    title: "Devluke - Itch.io Portfolio",
    category: "web",
    cover: itchCover,
    video: "https://www.youtube.com/embed/_XCnQWzBsbQ",
    shortDescription: "My library of all indie games published on Itch.io.",
    description:
      "Devluke is my personal portfolio site on Itch.io, showcasing all my indie game projects with detailed descriptions, media, and download links.",
    contributions: [
      "Designed and developed the entire portfolio site",
      "Created most of the game assets and promotional materials",
      "Implemented game mechanics and level design for featured games"
    ],
    skills: ["Game Design", "Godot", "Pixel Art"],
    demo: "https://devlukedevlog.itch.io"
  },
  {
    id: 2,
    title: "Appie's Legobib",
    category: "web",
    cover: appiesLegobibCover,
    video: "https://www.youtube.com/embed/d4vYPId-ngY",
    shortDescription: "A place where children can play with Lego's.",
    description:
      "We developed 'Appie's Legobib' to provide a safe and fun environment for children to play with Lego bricks. This app was made in collaboration with Bricks And More. It was made for children staying long-term in hospitals.",
    contributions: [
      "Built most of the backend functionality",
      "Implemented the first Admin panel prototype",
      "Led a team of 5 developers"
    ],
    skills: [".Net", "Nx", "Git", "Teamwork", "Leadership"]
  },
  {
    id: 3,
    title: "AR Castle Defender",
    category: "game",
    cover: arProjectCover,
    video: "https://www.youtube.com/embed/cnlwDA4L_zc",
    shortDescription: "A tower defense AR game for mobile devices.",
    description:
      "An Augmented Reality tower defense game where players defend their castle against waves of enemies using AR technology.",
    contributions: [
      "Designed enemy AI and wave system",
      "Built frontend with Flutter",
      "Handled communication with Unity AR module"
    ],
    skills: ["Unity", "Flutter", "Firebase", "AR Development"]
  },
  {
    id: 4,
    title: "Blink Odyssey",
    category: "game",
    cover: blinkOdysseyCover,
    demo: "/exes/blink_odyssey.exe",
    shortDescription: "A prototype of a Clicker / Idle game.",
    description:
      "A prototype idle/clicker game focused on incremental progression through missions, gold, and equipment. You can download the game either trough clicking Demo or find it in the releases on my Github.",
    contributions: [
      "Developed the entire prototype",
      "Implemented gameplay mechanics and UI",
      "Optimized performance and fixed bugs"
    ],
    skills: ["Godot", "UI/UX", "Game Mechanics"],
    github: "https://github.com/DevlukeDevlog/Blink-Odyssey"
  },
  {
    id: 5,
    title: "Kwartel Boek",
    category: "app",
    cover: kwartelBoekCover,
    video: "https://www.youtube.com/embed/kNBDVwrQXTY",
    shortDescription: "An app to manage bird and egg data.",
    description:
      "An app created to digitally track bird information and egg incubation, replacing manual paper tracking.",
    contributions: [
      "Designed business logic",
      "Built Flutter frontend with Firebase backend",
      "Gathered requirements directly from client"
    ],
    skills: ["Flutter", "Firebase", "Client Communication"]
  }
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // 🔒 Lock background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const categories = [
    { id: "all", label: "All Projects", icon: FaCode },
    { id: "game", label: "Games", icon: FaGamepad },
    { id: "web", label: "Websites", icon: FaGlobe },
    { id: "app", label: "Applications", icon: FaMobileAlt }
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title fadeIn">Projects</h2>

      <div className="projects-showcase">
        <nav className="project-categories">
          <div className="large-only">
            <div className="button-group">
              {categories.map(cat => {
                const Icon = cat.icon;
                return (
                  <div key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={selectedCategory === cat.id ? "active" : "unactive"}
                    >
                      <Icon style={{ marginRight: "0.5rem" }} />
                      {cat.label}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="small-only mobile-small-only">
            <select
              className="project-dropdown"
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </nav>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-tile fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.cover} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.shortDescription}
                </p>

                <div className="project-skills">
                  {project.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="skill-tag">
                      +{project.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal foldOpen"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>

            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <div className="modal-links">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>

            <div className="modal-body">
              {selectedProject.video && (
                <div className="modal-video">
                  <iframe
                    src={selectedProject.video}
                    title={selectedProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <p className="modal-description">
                {selectedProject.description}
              </p>

              <div className="modal-section">
                <h4>Key Contributions</h4>
                <ul className="contributions-list">
                  {selectedProject.contributions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="modal-skill-tags">
                  {selectedProject.skills.map(skill => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
