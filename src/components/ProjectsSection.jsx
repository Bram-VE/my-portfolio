import "../styles/projects.css";
import { useEffect, useState } from "react";
import {
  FaCode,
  FaExternalLinkAlt,
  FaGamepad,
  FaGithub,
  FaGlobe,
  FaMobileAlt,
  FaTimes,
} from "react-icons/fa";

import appiesLegobibCover from "../assets/images/projects/appies_legobib_cover.png";
import arProjectCover from "../assets/images/projects/ar_project_cover.png";
import blinkOdysseyCover from "../assets/images/projects/blink_odyssey_cover.png";
import itchCover from "../assets/images/projects/itchIo_profile_cover.png";
import kwartelBoekCover from "../assets/images/projects/kwartel_boek_cover.png";

const projects = [
  {
    id: 1,
    title: "Devluke - Itch.io Showcase",
    category: "game",
    cover: itchCover,
    video: "https://www.youtube.com/embed/_XCnQWzBsbQ",
    role: "Game developer, team lead, artist, and programmer",
    shortDescription: "A collection of indie games and prototypes published under Devluke.",
    description:
      "My Itch.io page brings together the games I made as solo projects and team projects. It shows my growth as an indie developer: designing game loops, making pixel-art assets, programming mechanics, packaging builds, and presenting projects clearly to players.",
    responsibilities: [
      "Built most solo projects from idea to release, including design, code, art, and publishing",
      "Worked in teams on selected projects as leader, artist, and programmer",
      "Used feedback from players and teammates to improve controls, pacing, and presentation",
    ],
    learnings: [
      "Working in teams taught me the importance of clear communication and acting on feedback",
      "I learned I can pick up new skills and deliver features even when I start with little or no prior knowledge",
      "Leading a small team taught me to divide tasks clearly and keep scope realistic",
    ],
    skills: ["Godot", "Game Design", "Pixel Art", "Team Leadership", "Itch.io"],
    demo: "https://devlukedevlog.itch.io",
  },
  {
    id: 2,
    title: "Appie's Legobib",
    category: "web",
    cover: appiesLegobibCover,
    video: "https://www.youtube.com/embed/d4vYPId-ngY",
    role: "Backend developer and team lead",
    shortDescription: "Reservation and inventory system for a hospital Lego library.",
    description:
      "Appie's Legobib is a full-stack system made for Bricks And More to help children in long-term hospital care reserve and play with Lego sets. The project included inventory management, reservations, admin workflows, authentication, QR flows, and deployment work. During this project I discovered I especially enjoy backend work and building server-side logic, while also picking up Angular and improving my client-facing visual sensibilities.",
    responsibilities: [
      "Built a large part of the .NET backend and core business logic",
      "Implemented the first admin panel prototype and helped shape management workflows",
      "Led a team of 5 developers and helped coordinate planning, reviews, and delivery",
      "Connected set data and inventory flows so the app could support real-world use",
    ],
    learnings: [
      ".NET works best for me when domain logic is structured and easy to test",
      "I discovered I enjoy backend work and designing server-side logic",
      "Learned Angular and built frontend components to better match client needs",
      "Improved focus on client-facing visuals and user flows to make the app clearer for end users",
    ],
    skills: [".NET", "Angular", "Nx", "Git", "Teamwork", "Leadership"],
  },
  {
    id: 3,
    title: "AR Castle Defender",
    category: "game",
    cover: arProjectCover,
    video: "https://www.youtube.com/embed/cnlwDA4L_zc",
    role: "Flutter and Firebase developer",
    shortDescription: "A mobile AR tower defense game with connected app features.",
    description:
      "AR Castle Defender is an augmented reality tower defense concept where players defend a castle against enemy waves on mobile. My main focus was the Flutter application layer and Firebase integration around the AR gameplay.",
    responsibilities: [
      "Built the Flutter screens and app structure around the game experience",
      "Integrated Firebase for data handling and connected app features",
      "Helped connect the mobile app flow with the Unity AR part of the project",
      "Tested mobile behavior and adjusted UI flows for a smoother player experience",
    ],
    learnings: [
      "Integrated AR features by connecting Unity with the Flutter mobile layer and learned how to structure that communication",
      "Gained deeper Unity knowledge specific to AR development",
      "Improved my Flutter skills when building the surrounding app features",
    ],
    skills: ["Flutter", "Firebase", "Unity", "AR Development", "Mobile UI"],
  },
  {
    id: 4,
    title: "Blink Odyssey",
    category: "game",
    cover: blinkOdysseyCover,
    role: "Solo developer",
    shortDescription: "An idle/clicker prototype about progression, missions, and rewards.",
    description:
      "Blink Odyssey is a solo prototype where I explored incremental progression through gold, missions, equipment, upgrades, and UI feedback. The goal was to understand how idle games keep players moving through small but satisfying decisions.",
    responsibilities: [
      "Designed and programmed the complete prototype in Godot",
      "Created the progression systems, mission flow, and reward logic",
      "Built the UI and tuned feedback so upgrades felt readable and responsive",
      "Packaged a downloadable build and documented the project on GitHub",
    ],
    learnings: [
      "Visuals aren't everything, simple prototypes are often enough to validate ideas",
      "Working for a client on this prototype taught me to adopt more structured workflows",
    ],
    skills: ["Godot", "Game Mechanics", "UI/UX", "Balancing"],
    github: "https://github.com/DevlukeDevlog/Blink-Odyssey",
  },
  {
    id: 5,
    title: "Kwartel Boek",
    category: "app",
    cover: kwartelBoekCover,
    video: "https://www.youtube.com/embed/kNBDVwrQXTY",
    role: "Solo app developer",
    shortDescription: "A Flutter app for managing bird and egg incubation data.",
    description:
      "Kwartel Boek replaces paper tracking with a digital workflow for bird information and egg incubation. The app was shaped around practical client needs: storing data clearly, reducing manual work, and keeping the workflow simple enough for repeated use.",
    responsibilities: [
      "Gathered requirements directly from the client and translated them into app flows",
      "Designed the data structure and business logic for birds, eggs, and incubation",
      "Built the Flutter frontend and connected Firebase as the backend",
      "Adjusted the interface around practical daily use instead of unnecessary complexity",
    ],
    learnings: [
      "Used Firebase for authentication and storing app data.",
      "Learned to ask clearer, more targeted questions to clients to better understand needs",
      "Focused on keeping the app as simple as possible for less technical users",
    ],
    skills: ["Flutter", "Firebase", "Client Communication", "App Design"],
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: FaCode },
  { id: "game", label: "Games", icon: FaGamepad },
  { id: "web", label: "Websites", icon: FaGlobe },
  { id: "app", label: "Applications", icon: FaMobileAlt },
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title fadeIn">Projects</h2>

      <div className="projects-showcase">
        <nav className="project-categories" aria-label="Project categories">
          <div className="large-only">
            <div className="project-button-group">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? "active" : "unactive"}
                  >
                    <Icon aria-hidden="true" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="small-only mobile-small-only">
            <select
              className="select-control project-dropdown"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </nav>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="project-tile fadeIn"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <button
                type="button"
                className="project-card-button"
                onClick={() => setSelectedProject(project)}
                aria-label={`View details for ${project.title}`}
              >
                <div className="project-image">
                  <img
                    src={project.cover}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.shortDescription}</p>
                  </div>

                  <div className="project-skills">
                    {project.skills.slice(0, 4).map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 4 && (
                      <span className="skill-tag">+{project.skills.length - 4}</span>
                    )}
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            className="project-modal foldOpen"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <FaTimes />
            </button>

            <div className="modal-header">
              <p className="section-kicker">Project Case Study</p>
              <h2 id="project-modal-title">{selectedProject.title}</h2>
              <p className="modal-role">{selectedProject.role}</p>

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
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-section">
                <h4>My Role</h4>
                <p className="modal-section-text">{selectedProject.role}</p>
              </div>

              <div className="modal-section">
                <h4>What I Did</h4>
                <ul className="project-detail-list">
                  {selectedProject.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Key Learnings</h4>
                <ul className="project-detail-list learning-list">
                  {selectedProject.learnings.map((learning) => (
                    <li key={learning}>{learning}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="modal-skill-tags">
                  {selectedProject.skills.map((skill) => (
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
