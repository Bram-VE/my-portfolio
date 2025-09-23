import React, { useState, useEffect } from "react";
import Layout from "./layout_template";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGraduationCap, faGamepad, faPalette, faBookOpen, faFileDownload 
} from "@fortawesome/free-solid-svg-icons";
import { DiPython, DiJava } from "react-icons/di";
import { FaCogs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiLaravel, SiIntellijidea, SiDocker } from "react-icons/si";
import profilePicture from "@/assets/profile_picture.jpg";
import styles from "./about_me_screen.module.css";

export default function About({ theme = "dark" }) {
  const [activeCategory, setActiveCategory] = useState("other");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleCategoryClick = (cat) => setActiveCategory(cat);

  const timeline = [
    { year: "2014 - 2020", text: "Bouw-&Houtkunde at DIA Aarschot" },
    { year: "2020 - 2023", text: "Bouw at Thomas More Geel" },
    { year: "2023 - Now", text: "Application Development at Thomas More Geel" },
  ];

  const interests = [
    { icon: faGamepad, text: "Programming games & engines" },
    { icon: faPalette, text: "Creating pixel art & UI/UX" },
    { icon: faBookOpen, text: "Reading, running, walking" },
  ];

  const skills = [
    { name: ".NET", icon: <FaCogs />, level: "100%" },
    { name: "Python", icon: <DiPython />, level: "80%" },
    { name: "Java", icon: <DiJava />, level: "60%" },
  ];

  const categories = {
    frontend: [{ icon: <FaReact />, title: "React", desc: "UI / Frontend" }],
    backend: [
      { icon: <FaReact />, title: "React", desc: "Data, Backend" },
      { icon: <SiLaravel />, title: "Laravel", desc: "PHP, Web" },
      { icon: <FaGitAlt />, title: "Git", desc: "Version Control" },
    ],
    tools: [
      { icon: <SiIntellijidea />, title: "IntelliJ IDEA", desc: "Java IDE" },
      { icon: <SiDocker />, title: "Docker", desc: "DevOps" },
    ],
    other: [
      { icon: <FaCogs />, title: "Unity", desc: "Game Engine" },
      { icon: <FaCogs />, title: "Godot", desc: "Game Engine" },
      { icon: <FaCogs />, title: "Business Skills", desc: "Management" },
      { icon: <FaCogs />, title: "Communication", desc: "Verbal & Written" },
    ],
  };

  return (
    <Layout title="About Me">
      <div className={styles.container}>
        {/* Hero */}
        <motion.section className={styles.hero} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.img src={profilePicture} alt="Bram Van Eccelpoel" className={styles.profilePicture} whileHover={{ scale: 1.05, rotate: 2 }} />
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Hi, I'm <span className={styles.orange}>Bram Van Eccelpoel</span>
            </h1>
            <p>Passionate student in <strong>Application Development</strong> at Thomas More Geel. Transitioned from construction to follow my love for coding, creativity, and games.</p>
            <p>From Herselt, eager to learn more about programming and data-driven development.</p>
            <a href="/CV_BramVanEccelpoel.pdf" download className={styles.cvBtn}>
              <FontAwesomeIcon icon={faFileDownload} /> Download CV
            </a>
          </div>
        </motion.section>

        {/* Timeline */}
        <section>
          <h2 className={styles.sectionTitle}><FontAwesomeIcon icon={faGraduationCap} /> My Learning Journey</h2>
          <div className={styles.timelineLine}>
            {timeline.map((item, i) => (
              <motion.div key={i} className={styles.timelineItem} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.3, duration: 0.6 }}>
                <span className={styles.timelineDot}></span>
                <span className={styles.timelineYear}>{item.year}</span>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 className={styles.sectionTitle}>🎮 What I Love Doing</h2>
          <div className={styles.cardGrid}>
            {interests.map((item, i) => (
              <motion.div key={i} className={styles.card} whileHover={{ scale: 1.05 }}>
                <FontAwesomeIcon icon={item.icon} className={styles.cardIcon} />
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className={styles.sectionTitle}>🛠️ My Skills</h2>
          <div className={styles.cardGrid}>
            {skills.map((skill, i) => (
              <motion.div key={i} className={styles.skillCard} whileHover={{ scale: 1.05 }}>
                <div className={styles.skillHeader}>{skill.icon} {skill.name}</div>
                <div className={styles.skillBar}>
                  <motion.div className={styles.skillFill} initial={{ width: 0 }} animate={{ width: skill.level }} transition={{ duration: 1 }}></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Categories */}
          <div className={styles.categoryBtns}>
            {Object.keys(categories).map((cat) => (
              <button key={cat} onClick={() => handleCategoryClick(cat)} className={`${styles.categoryBtn} ${activeCategory === cat ? styles.activeBtn : ""}`}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Skills By Category */}
          <div className={styles.cardGrid}>
            {categories[activeCategory].map((skill, i) => (
              <SkillCard key={i} icon={skill.icon} title={skill.title} desc={skill.desc} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

function SkillCard({ icon, title, desc }) {
  return (
    <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
      <div className={styles.cardIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}
