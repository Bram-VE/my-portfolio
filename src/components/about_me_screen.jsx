import Layout from './layout_template';
import styles from './about_me_screen.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGamepad,
  faPalette,
  faBookOpen,
  faGraduationCap,
  faBullseye,
  faEnvelope,
  faDatabase,
  faGlobe,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import profilePicture from '@/assets/profile_picture.jpg';
import cv from '@/assets/CV_Bram Van Eccelpoel.pdf'; 

function About() {
  return (
    <Layout title="About Me">
      <div className={styles.aboutContainer}>
        {/* Profile Section */}
        <section className={styles.profileSection}>
          <img src={profilePicture} alt="Bram Van Eccelpoel" className={styles.profileImage} />
          <div>
            <h2>Hello, I'm Bram Van Eccelpoel</h2>
            <p>
              I'm a passionate student currently studying <strong>Application Development</strong>. I chose this course because I wanted to learn more about technology and how to build apps. I love to code, build apps, and experiment with game development in my free time.
            </p>
            <a href={cv} download="CV_Bram Van Eccelpoel.pdf" className={styles.downloadButton}>Download CV</a>
          </div>
        </section>

        {/* Interests */}
        <section className={styles.interests}>
          <h3>What I Love Doing</h3>
          <ul className={styles.noBullets}>
            <li><FontAwesomeIcon icon={faGamepad} className={styles.icon} /> Programming games and developing game engines</li>
            <li><FontAwesomeIcon icon={faPalette} className={styles.icon} /> Creating pixel-art and learning new technologies</li>
            <li><FontAwesomeIcon icon={faBookOpen} className={styles.icon} /> Reading books, walking, and running</li>
          </ul>
        </section>

        {/* Education */}
        <section className={styles.education}>
          <h3><FontAwesomeIcon icon={faGraduationCap} className={styles.icon} /> Education & Growth</h3>
          <p>
            During my studies, I gained a strong foundation in coding and web development. I enjoy tackling new challenges and understanding how things work under the hood.
          </p>
        </section>

        {/* Skills */}
        <section className={styles.skills}>
          <h3>My Skillset</h3>
          <div className={styles.skillBar}>
            <span><FontAwesomeIcon icon={faMicrosoft} className={styles.icon} /> .NET</span>
            <div className={styles.bar}><div className={`${styles.fill} ${styles.dotnet}`}></div></div>
          </div>
          <div className={styles.skillBar}>
            <span><FontAwesomeIcon icon={faDatabase} className={styles.icon} /> Data</span>
            <div className={styles.bar}><div className={`${styles.fill} ${styles.data}`}></div></div>
          </div>
          <div className={styles.skillBar}>
            <span><FontAwesomeIcon icon={faPython} className={styles.icon} /> Python</span>
            <div className={styles.bar}><div className={`${styles.fill} ${styles.python}`}></div></div>
          </div>
          <div className={styles.skillBar}>
            <span><FontAwesomeIcon icon={faGlobe} className={styles.icon} /> Fullstack</span>
            <div className={styles.bar}><div className={`${styles.fill} ${styles.fullstack}`}></div></div>
          </div>
          <div className={styles.skillBar}>
            <span><FontAwesomeIcon icon={faJava} className={styles.icon} /> Java</span>
            <div className={styles.bar}><div className={`${styles.fill} ${styles.java}`}></div></div>
          </div>
        </section>

        {/* Goals */}
        <section className={styles.goals}>
          <h3><FontAwesomeIcon icon={faBullseye} className={styles.icon} /> My Goals</h3>
          <p>
            My ambition is to become a skilled developer, contributing to impactful and creative projects. I also aim to pursue game development as a serious hobby or side-career.
          </p>
        </section>

        {/* Contact */}
        <section className={styles.contact}>
          <h3><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Let's Connect</h3>
          <p>
            Want to collaborate or just chat? Feel free to reach out via social media or email. I'm always open to new opportunities and ideas.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default About;
