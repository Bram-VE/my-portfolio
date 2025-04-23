import React, { useState } from 'react';
import Layout from './layout_template';
import styles from './projects_screen.module.css';

import duffalos from '@/assets/duffalos.png';
import kempenrust from '@/assets/kempenrust.png';
import cinema from '@/assets/cinema.png';
import pixelated from '@/assets/pixelated.png';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'simplepixelated',
      title: "SimplePixelated",
      image: pixelated,
      description: 'This is my own profile on Itch.io which is a platform for indie game developers. I have uploaded some of my own games and game assets.',
      contribution: 'I developed games myself mostly with godot. I make the game assets myself aswell.',
      skills: ['Godot', 'Aseprite', 'Krita'],
      link: 'https://simplepixelated.itch.io'
    },
    {
        id: 'kempenrust',
        title: "Hotel Kempenrust",
        image: kempenrust,
        description: 'This is a website we builded for a swimming club so parents can register their children for swimming lessons. They also can request for a party their. The admin and swim teachers can use the website aswell. We builded this for the course SKILLS2',
        contribution: 'I developed a reusable component for the admin panel and the calendar.',
        skills: ['JavaScript', 'PHP', 'Laravel'],
        link: 'https://www.hotel-kempenrust.be'
    },
    {
        id: 3,
      title: "Soccer Club De Duffalo's",
      image: duffalos,
      description: 'This is a prototype of a website that later will be built by other students. It is a website for a soccer club of one of our lectures. We builded this for the course SKILLS2',
      contribution: 'I developed the pages for keeping the match analytics saved.',
      skills: ['Figma', 'Communication Skills'],
      link: 'https://www.figma.com/proto/oRphuh5sZdtGpIro8JO4PY/SVW3---Prototyping---De-Duffalo-s?node-id=1091-1053&t=HZUTzb4QX2QVw6X2-1&scaling=contain&content-scaling=fixed&page-id=1091%3A910'
    },
    {
        id: 3,
        title: "Starlight Cinemas",
        image: cinema,
        description: "This is a website we builded for a project in school for the course Fullstack. It's a website about a cinema theater. You can see the movies that are playing and you can buy tickets for them.",
        contribution: 'I developed the pages for the movies that are playing now and later. (The database has been removed so the movies are not showing anymore)',
        skills: ['JavaScript', 'PHP'],
        link: 'https://starlightcinemas.netlify.app'
    },
  ];

  return (
    <Layout title="Projects">
        <div className={styles.projectsContainer}>
        {projects.map(project => (
            <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectBox}>
                <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
                onClick={() => setSelectedProject(project)}
                />
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                Visit Site
                </a>
            </div>
            </div>
        ))}
        </div>

      {selectedProject && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <p><strong>Description:</strong> {selectedProject.description}</p>
            <p><strong>My Contribution:</strong> {selectedProject.contribution}</p>
            <div className={styles.skillsContainer}>
              {selectedProject.skills.map((skill, index) => (
                <div key={index} className={styles.skillBox}>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            <button className={styles.closeButton} onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Projects;
