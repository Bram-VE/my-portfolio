import React, { useState } from 'react';
import Layout from './layout_template';
import styles from './about_me_screen.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faGamepad, faPalette, faBookOpen, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { DiPython, DiJava } from 'react-icons/di';
import { FaCogs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiLaravel, SiIntellijidea, SiDocker } from 'react-icons/si'; // Import additional icons
import profilePicture from '@/assets/profile_picture.jpg';

function About() {
  // Define the activeCategory state (default is 'backend')
  const [activeCategory, setActiveCategory] = useState('other');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <Layout title="About Me">
      <div className={`${styles.container} ${styles.themeWrapper}`}>

        {/* Profile Intro */}
        <div className={`${styles.heroSection} ${styles.themeSection}`}>
          <img src={profilePicture} alt="Bram Van Eccelpoel" className={styles.heroImage} />
          <div className={styles.heroText}>
            <h1>Hi, I'm <span className={styles.highlight}>Bram Van Eccelpoel</span></h1>
            <p>
              I'm a passionate student in <strong>Application Development</strong> at Thomas More Geel. With a background in construction, I transitioned into the digital world to pursue my love for coding, creativity, and games.
            </p>
            <p>I am from Herselt a little city next to Westerlo. I have the urge to learn more about programming and data behind big companies.</p>
            <a href="/CV_BramVanEccelpoel.pdf" download className={styles.cvButton}>
              <FontAwesomeIcon icon={faFileDownload} /> Download CV
            </a>
          </div>
        </div>

        {/* Timeline */}
        <section className={`${styles.sectionBox}`}>
          <h2><FontAwesomeIcon icon={faGraduationCap} /> My Learning Journey</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span className={styles.year}>2014 - 2020</span>
              <p>Bouw-&Houtkunde at DIA Aarschot</p>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.year}>2020 - 2023</span>
              <p>Bouw at Thomas More Geel</p>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.year}>2023 - Now</span>
              <p>Application Development at Thomas More Geel</p>
            </div>
          </div>
        </section>

        {/* Interests */}
        <section className={`${styles.sectionBox}`}>
          <h2>🎮 What I Love Doing</h2>
          <div className={styles.interests}>
            <div><FontAwesomeIcon icon={faGamepad} /> Programming games & engines</div>
            <div><FontAwesomeIcon icon={faPalette} /> Creating pixel art & UI/UX</div>
            <div><FontAwesomeIcon icon={faBookOpen} /> Reading, running, walking</div>
          </div>
        </section>

        {/* Skills */}
        <section className={`${styles.sectionBox}`}>
          <h2>🛠️ My Skills</h2>
          
          {/* Primary Skills: .NET, Python, Java */}
          <div className={styles.skills}>
            <div className={styles.skill}>
              <FaCogs /> .NET
              <div className={styles.skillBar}><div className={styles.fillDotnet}></div></div>
            </div>
            <div className={styles.skill}>
              <DiPython /> Python
              <div className={styles.skillBar}><div className={styles.fillPython}></div></div>
            </div>
            <div className={styles.skill}>
              <DiJava /> Java
              <div className={styles.skillBar}><div className={styles.fillJava}></div></div>
            </div>
          </div>

          {/* Category Buttons */}
          <div className={styles.skillsButtons}>
            <button onClick={() => handleCategoryClick('frontend')}>Frontend</button>
            <button onClick={() => handleCategoryClick('backend')}>Backend</button>
            <button onClick={() => handleCategoryClick('tools')}>Tools</button>
            <button onClick={() => handleCategoryClick('other')}>Other Skills</button>
          </div>

          {/* Skills List for Each Category */}
          <div className={styles.skillsList}>
            {/* Backend Skills */}
            {activeCategory === 'backend' && (
              <>
                <div className={styles.skillItem}>
                  <FaReact /> React
                  <p>UI, Frontend</p>
                </div>
                <div className={styles.skillItem}>
                  <SiLaravel /> Laravel
                  <p>PHP, Web</p>
                </div>
                <div className={styles.skillItem}>
                  <FaGitAlt /> Git
                  <p>Version Control</p>
                </div>
              </>
            )}

            {/* Frontend Skills */}
            {activeCategory === 'frontend' && (
              <>
                <div className={styles.skillItem}>
                  <FaReact /> React
                  <p>UI, Frontend</p>
                </div>
              </>
            )}

            {/* Tools Skills */}
            {activeCategory === 'tools' && (
              <>
                <div className={styles.skillItem}>
                  <SiIntellijidea /> IntelliJ IDEA
                  <p>Java, IDE</p>
                </div>
                <div className={styles.skillItem}>
                  <SiDocker /> Docker
                  <p>DevOps, Containers</p>
                </div>
              </>
            )}

            {/* Other Skills */}
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

      </div>
    </Layout>
  );
}

export default About;
