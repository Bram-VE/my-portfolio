import Layout from './layout_template';
import styles from './home.module.css';
import codingPicture from '@/assets/coding.jpg';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { DiJava, DiPython, DiPhp, DiDocker } from 'react-icons/di';
import { FaGitAlt, FaFigma, FaCogs } from 'react-icons/fa';
import { SiIntellijidea } from 'react-icons/si'; // For IntelliJ IDEA
import { FaJira } from 'react-icons/fa'; // For Jira
import { FaReact } from 'react-icons/fa'; // For React
import { DiLaravel } from 'react-icons/di'; // For Laravel


import kempenrust from '@/assets/kempenrust.png';
import pixelated from '@/assets/pixelated.png';

function Home() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const featuredProjects = [
    {
      id: 'simplepixelated',
      title: "SimplePixelated",
      image: pixelated,
      description: 'This is my own profile on Itch.io which is a platform for indie game developers. I have uploaded some of my own games and game assets.',
      link: '/projects#simplepixelated',
    },
    {
      id: 'kempenrust',
      title: "Hotel Kempenrust",
      image: kempenrust,
      description: 'This is a website we built for a swimming club so parents can register their children for swimming lessons or parties. It was part of our SKILLS2 course.',
      link: '/projects#kempenrust',
    },
  ];

  return (
    <Layout title="Home">
      <div className={styles.homeContainer}>
        <section className={styles.introSection}>
          <div className={styles.introText}>
            <h1>Hello, I'm Bram</h1>
            <p>
              I'm an Application Development student passionate about programming, game development, and pixel art. Explore my projects and learn about my skills!
            </p>
          </div>
          <img src={codingPicture} alt="Illustration" className={styles.homeImage} />
        </section>

        <section className={styles.ctaSection}>
          <h2>Looking for a developer?</h2>
          <p>Check out my work and get in touch!</p>
          <Link to="/projects" className={styles.ctaButton}>Learn More About My Projects</Link> 
          <Link to="/about" className={styles.ctaButton}>Learn More About Me</Link>
        </section>

        <section className={styles.skillsSection}>
          <h2>My Skills</h2>
          <div className={styles.skillsButtons}>
            <button onClick={() => handleCategoryClick('frontend')}>Frontend</button>
            <button onClick={() => handleCategoryClick('backend')}>Backend</button>
            <button onClick={() => handleCategoryClick('tools')}>Tools</button>
            <button onClick={() => handleCategoryClick('other')}>Other Skills</button>
          </div>

          <div className={styles.selectedCategoryBox}>
            <h3>Active Category: {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}</h3>
          </div>

          <div className={styles.skillsList}>
            {activeCategory === 'frontend' && (
              <>
                <div className={styles.skillItem}>
                  <FaReact /> React
                  <p>UI, Frontend</p>
                </div>
                <div className={styles.skillItem}>
                  <DiLaravel /> Laravel
                  <p>PHP, Web</p>
                </div>
              </>
            )}
            {activeCategory === 'backend' && (
              <>
                <div className={styles.skillItem}>
                  <DiPhp /> PHP
                  <p>Web, Backend</p>
                </div>
                <div className={styles.skillItem}>
                  <DiJava /> Java
                  <p>Apps, Backend</p>
                </div>
                <div className={styles.skillItem}>
                  <DiPython /> Python
                  <p>Data, Backend</p>
                </div>
                <div className={styles.skillItem}>
                  <FaGitAlt /> Git
                  <p>Version Control</p>
                </div>
              </>
            )}
            {activeCategory === 'tools' && (
              <>
                <div className={styles.skillItem}>
                  <FaFigma /> Figma
                  <p>Design, Prototyping</p>
                </div>
                <div className={styles.skillItem}>
                  <SiIntellijidea /> IntelliJ IDEA
                  <p>Java, IDE</p>
                </div>
                <div className={styles.skillItem}>
                  <DiDocker /> Docker
                  <p>DevOps, Containers</p>
                </div>
                <div className={styles.skillItem}>
                  <FaJira /> Jira
                  <p>Project Management</p>
                </div>
              </>
            )}
            {activeCategory === 'other' && (
              <>
                <div className={styles.skillItem}>
                  <FaCogs /> Unity
                  <p>Game Engine</p>
                </div>
                <div className={styles.skillItem}>
                  <FaCogs /> Godot
                  <p>Game Engine</p>
                </div>
                <div className={styles.skillItem}>
                  <FaCogs /> Business Skills
                  <p>Management</p>
                </div>
                <div className={styles.skillItem}>
                  <FaCogs /> Communication
                  <p>Verbal, Written</p>
                </div>
              </>
            )}
          </div>
        </section>

        <section className={styles.featuredProjectsSection}>
          <h2>Featured Projects</h2>
          <div className={styles.projectsContainer}>
            {featuredProjects.map((project, index) => (
              <div className={styles.projectCard} key={index}>
                <div className={styles.projectBox}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} className={styles.projectButton}>
                    View Full Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
