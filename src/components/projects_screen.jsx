import React, { useState } from 'react';
import Layout from './layout_template';
import styles from './projects_screen.module.css';
import { motion } from 'framer-motion';

import duffalos from '@/assets/duffalos.png';
import kempenrust from '@/assets/kempenrust.png';
import cinema from '@/assets/cinema.png';
import pixelated from '@/assets/pixelated.png';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'simplepixelated',
      title: "SimplePixelated (How to build a game)",
      image: pixelated,
      shortDescription: 'My own profile on Itch.io with games and assets I made.',
      longDescription: 'This is my own profile on Itch.io which is a platform for indie game developers. I have uploaded some of my own games and game assets.',
      contribution: 'I developed games myself mostly with Godot. I make the game assets myself as well.',
      skills: [
        { name: 'Godot', level: 100 },
        { name: 'Aseprite', level: 90 },
        { name: 'Krita', level: 85 }
      ],
      link: 'https://simplepixelated.itch.io'
    },
    {
      id: 'kempenrust',
      title: "Hotel Kempenrust (Learning to build a website with Laravel)",
      image: kempenrust,
      shortDescription: 'A Laravel site to register for swimming lessons or request parties.',
      longDescription: 'This is a website we built for a swimming club so parents can register their children for swimming lessons. They can also request a party there. The admin and swim teachers can use the website as well.',
      contribution: 'I developed a reusable component for the admin panel and the calendar.',
      skills: [
        { name: 'JavaScript', level: 80 },
        { name: 'PHP', level: 90 },
        { name: 'Laravel', level: 85 }
      ],
      link: 'https://www.hotel-kempenrust.be'
    },
    {
      id: 'duffalos',
      title: "Soccer Club De Duffalo's (Prototyping & analysis)",
      image: duffalos,
      shortDescription: 'A prototype in Figma for a soccer club website.',
      longDescription: 'This is a prototype of a website that will later be built by other students. We learned how to communicate with clients, analyze the project, and make a Use-Case diagram.',
      contribution: 'I developed the pages for keeping the match analytics saved and the use cases for it.',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Communication', level: 95 }
      ],
      link: 'https://www.figma.com/proto/oRphuh5sZdtGpIro8JO4PY/SVW3---Prototyping---De-Duffalo-s?node-id=1091-1053&t=HZUTzb4QX2QVw6X2-1&scaling=contain&content-scaling=fixed&page-id=1091%3A910'
    },
    {
      id: 'cinema',
      title: "Starlight Cinemas (PHP Learnings)",
      image: cinema,
      shortDescription: 'A cinema website to view and book tickets for movies.',
      longDescription: 'This is a website about a cinema theater. You can see the movies playing and buy tickets for them. Also, events are displayed.',
      contribution: 'I developed the pages for the movies that are playing. Learned to integrate backend and frontend using PHP.',
      skills: [
        { name: 'JavaScript', level: 80 },
        { name: 'PHP', level: 85 }
      ],
      link: 'https://starlightcinemas.netlify.app'
    },
  ];

  return (
    <Layout title="Projects">
      <motion.div 
        className={styles.projectsContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            whileHover={{ scale: 1.05, rotateY: 5, boxShadow: "0 0 25px #FF8C42" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className={styles.projectBox}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
                onClick={() => setSelectedProject(project)}
              />
              <div className={styles.textContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.shortDescription}</p>
              </div>
              <div className={styles.buttonContainer}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                  Visit Site
                </a>
                <button onClick={() => setSelectedProject(project)} className={styles.moreInfoButton}>
                  More Info
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <motion.div 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.modalHeader}>
              <h2>{selectedProject.title}</h2>
            </div>

            <div className={styles.modalDescription}>
              <p><strong>Description:</strong> {selectedProject.longDescription}</p>
            </div>

            <div className={styles.modalContributions}>
              <h3>My Contribution</h3>
              <p>{selectedProject.contribution}</p>
            </div>

            <div className={styles.modalSkills}>
              <h3>Skills & Tools</h3>
              <div className={styles.skillList}>
                {selectedProject.skills.map((skill, index) => (
                  <div key={index} className={styles.skillBox}>
                    <span>{skill.name}</span>
                    <div className={styles.skillBar}>
                      <div className={styles.skillProgress} style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className={styles.closeButton} onClick={() => setSelectedProject(null)}>
              Close
            </button>
          </motion.div>
        </div>
      )}
    </Layout>
  );
}

export default Projects;
