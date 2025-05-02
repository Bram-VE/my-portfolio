import Layout from './layout_template';
import styles from './home.module.css';
import codingPicture from '@/assets/coding.jpg';
import { Link } from 'react-router-dom';

import kempenrust from '@/assets/kempenrust.png';
import pixelated from '@/assets/pixelated.png';

function Home() {
  const featuredProjects = [
    {
      id: 'simplepixelated',
      title: "SimplePixelated",
      image: pixelated,
      description: 'This is my own profile on Itch.io, a platform for indie game developers.',
      link: '/projects#simplepixelated',
    },
    {
      id: 'kempenrust',
      title: "Hotel Kempenrust",
      image: kempenrust,
      description: 'A website for a swimming club to allow parents to register for lessons and parties.',
      link: '/projects#kempenrust',
    },
  ];

  return (
    <Layout title="Home">
      <div className={styles.homeContainer}>
        {/* Intro Section with Boxed Layout */}
        <section className={styles.sectionBox}>
          <div className={styles.introSection}>
            <div className={styles.introText}>
              <h1>Hello, I'm Bram</h1>
              <p>
                I'm an Application Development student passionate about programming, game development, and pixel art. Explore my projects and learn about my skills!
              </p>
            </div>
            <img src={codingPicture} alt="Illustration" className={styles.homeImage} />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className={styles.sectionBox}>
          <div className={styles.ctaSection}>
            <h2>Looking for a developer?</h2>
            <p>Check out my work and get in touch!</p>
            <div className={styles.skillsButtons}>
              <Link to="/projects" className={styles.ctaButton}>Learn More About My Projects</Link>
              <Link to="/about" className={styles.ctaButton}>Learn More About Me</Link>
            </div>
          </div>
        </section>

        {/* Featured Projects Section with Custom Styling */}
        <section className={styles.sectionBox}>
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
                  <div className={styles.textContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                  </div>
                  <div className={styles.buttonContainer}>
                    <Link to={project.link} className={styles.projectButton}>
                      View Full Project
                    </Link>
                  </div>
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
