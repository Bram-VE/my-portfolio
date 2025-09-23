import Layout from './layout_template';
import styles from './home.module.css';
import codingPicture from '@/assets/coding.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import kempenrust from '@/assets/kempenrust.png';
import pixelated from '@/assets/pixelated.png';
import { DiPython, DiJava } from 'react-icons/di';
import { FaCogs } from 'react-icons/fa';

function Home() {
  const featuredProjects = [
    {
      id: 'simplepixelated',
      title: "SimplePixelated",
      image: pixelated,
      description: 'My own profile on Itch.io, a platform for indie game developers.',
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

  const skills = [
    { name: ".NET", icon: <FaCogs />, level: "100%" },
    { name: "Python", icon: <DiPython />, level: "80%" },
    { name: "Java", icon: <DiJava />, level: "60%" },
  ];

  return (
    <Layout title="Home">
      <div className={styles.container}>
        {/* Hero Section */}
        <motion.section
          className={styles.heroSection}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src={codingPicture} 
            alt="Coding Illustration" 
            className={styles.heroImage}
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Hello, I'm <span className={styles.orange}>Bram</span>
            </h1>
            <p className={styles.heroParagraph}>
              Application Development student passionate about programming, game development, and pixel art. Explore my projects below!
            </p>
            <div className={styles.heroButtons}>
              <Link to="/projects" className={styles.cvBtn}>🚀 My Projects</Link>
              <Link to="/about" className={styles.cvBtn}>🎮 About Me</Link>
            </div>
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>🌟 Featured Projects</h2>
          <div className={styles.cardGrid}>
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className={styles.cardLarge}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #ff7b00" }}
              >
                <img src={project.image} alt={project.title} className={styles.cardImageLarge} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={project.link} className={styles.cvBtn}>View Project</Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>🛠️ My Skills</h2>
          <div className={styles.cardGrid}>
            {skills.map((skill, index) => (
              <motion.div key={index} className={styles.skillCard} whileHover={{ scale: 1.05 }}>
                <div className={styles.skillHeader}>
                  {skill.icon} {skill.name}
                </div>
                <div className={styles.skillBar}>
                  <motion.div
                    className={styles.skillFill}
                    style={{ width: skill.level }}
                    initial={{ width: 0 }}
                    animate={{ width: skill.level }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/about" className={styles.cvBtn}>More About Me</Link>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}

export default Home;
