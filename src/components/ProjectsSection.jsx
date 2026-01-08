import "../styles/projects.css";
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaGamepad, FaCode, FaPalette, FaTimes } from 'react-icons/fa';

import itchCover from "../assets/images/projects/itchIo_profile_cover.png";
import appiesLegobibCover from "../assets/images/projects/appies_legobib_cover.png";
import arProjectCover from "../assets/images/projects/ar_project_cover.png";
import blinkOdysseyCover from "../assets/images/projects/blink_odyssey_cover.png";
import portfolioCover from "../assets/images/projects/portfolio_cover.png";

const projects = [
  {
    id: 1,
    title: "Devluke - Itch.io Portfolio",
    category: "web",
    cover: itchCover,
		video: "https://www.youtube.com/embed/_XCnQWzBsbQ",
    shortDescription: "My library of all indie games published on Itch.io.",
    description: "Devluke is my personal portfolio site on Itch.io, showcasing all my indie game projects with detailed descriptions, media, and download links.",
    contributions: [
			"Designed and developed the entire portfolio site",
			"Created most of the game assets and promotional materials",
			"Implemented game mechanics and level design for featured games",
    ],
    skills: ["Game Design", "Godot", "Pixel Art"],
    demo: "https://devlukedevlog.itch.io",
  },
  {
    id: 2,
    title: "Appie's Legobib",
    category: "web",
    cover: appiesLegobibCover,
    video: "https://www.youtube.com/embed/d4vYPId-ngY",
    shortDescription: "A place where children can play with Lego's.",
    description: "We developed 'Appie's Legobib' to provide a safe and fun environment for children to play with Lego bricks. This app was made in collaboration with Bricks And More. It was made for the kids who where in the hospital for a long time and needed something fun to do.",
    contributions: [
      "Builtmost of the backend functionality",
      "Implemented the first prototype of Admin panel",
      "Leading the team of 5 developers including me",
    ],
    skills: [".Net", "Nx", "Git", "Teamwork", "Leadership"],
  },
  {
    id: 3,
    title: "AR Castle Defender",
    category: "game",
    cover: arProjectCover,
		video: "https://www.youtube.com/embed/cnlwDA4L_zc",
    shortDescription: "An tower defense AR game for mobile devices.",
    description: "We created an Augmented Reality tower defense game where players defend their castle from waves of enemies using strategically placed towers. The game utilizes AR technology to blend virtual elements with the real world, providing an immersive gaming experience.",
    contributions: [
      "Designed and implemented enemy AI and wave system",
      "Built up the frontend using Flutter and Firebase as backend",
      "Handled messaging between Flutter app and Unity AR module",
    ],
    skills: ["Unity", "Flutter", "Firebase", "AR Development"],
  },
  {
    id: 4,
    title: "Blink Odyssey",
    category: "game",
    cover: blinkOdysseyCover,
		video: "https://www.youtube.com/embed/5Ic1Md5pHc8",
    shortDescription: "A prototype of a Clicker / Idle game.",
    description: "I made an prototype of an idle/clicker game called Blink Odyssey. In this game, players embark on a journey through various missions, collecting gold and equipment to progress further. The game features simple mechanics that focus on incremental growth.",
    contributions: [
      "Initiated and developed the entire game prototype",
      "Implemented core gameplay mechanics and UI",
      "Made sure the game was optimized and bug-free",
    ],
    skills: ["Godot", "UI/UX", "Game Mechanics"],
    github: "https://github.com/DevlukeDevlog/Blink-Odyssey",
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "web",
    cover: portfolioCover,
    shortDescription: "My personal portfolio website to showcase my projects and skills.",
    description: "This portfolio website is designed to highlight my skills, projects, and experiences as a developer. It features a clean and modern design, easy navigation, and responsive layout to ensure a great user experience across all devices.",
    contributions: [
      "Initiated and developed the entire website",
      "Created responsive design and user-friendly navigation",
      "Made all the pixel art assets used in the website",
    ],
    skills: ["React", "UI/UX", "CSS", "Pixel Art"],
  }
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: FaCode },
    { id: 'game', label: 'Games', icon: FaGamepad },
    { id: 'web', label: 'Websites', icon: FaCode },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title fadeIn">Projects</h2>

      <div className="projects-showcase">
        {/* Category Filter */}
        <nav className="project-categories">
          <div className="large-only">
						<div className="flex button-group">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <div key={cat.id}>
                    <button
                    onClick={() => setSelectedCategory(cat.id)}
                    className={selectedCategory === cat.id ? 'active' : 'unactive'}
                    >
                    <Icon style={{ marginRight: '0.5rem' }} />
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
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </nav>

        {/* Projects Grid */}
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
                <p className="project-description">{project.shortDescription}</p>
                
                <div className="project-skills">
                  {project.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="skill-tag">+{project.skills.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div 
            className="project-modal foldOpen" 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>

            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <div className="modal-links">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
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

              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-section">
                <h4>Key Contributions</h4>
                <ul className="contributions-list">
                  {selectedProject.contributions.map((contrib, i) => (
                    <li key={i}>{contrib}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="modal-skill-tags">
                  {selectedProject.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
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