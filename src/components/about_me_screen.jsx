import React, { useState, useEffect } from "react";
import Layout from "./layout_template";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faGamepad,
  faPalette,
  faBookOpen,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import { DiPython, DiJava } from "react-icons/di";
import { FaCogs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiLaravel, SiIntellijidea, SiDocker } from "react-icons/si";
import profilePicture from "@/assets/profile_picture.jpg";
import styles from "./about_me_screen.module.css";

function About({ theme = "dark" }) {
  const [activeCategory, setActiveCategory] = useState("other");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <Layout title="About Me">
      <div className={styles.container}>
        {/* Hero Section */}
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={profilePicture}
            alt="Bram Van Eccelpoel"
            className={styles.profilePicture}
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
          <div>
            <h1 className={styles.heroTitle}>
              Hi, I'm <span className={styles.orange}>Bram Van Eccelpoel</span>
            </h1>
            <p>
              Passionate student in <strong>Application Development</strong> at
              Thomas More Geel. Transitioned from construction into IT to follow
              my love for coding, creativity, and games.
            </p>
            <p>
              From Herselt, I’m eager to learn more about programming and the
              data that drives big companies.
            </p>
            <a href="/CV_BramVanEccelpoel.pdf" download className={styles.cvBtn}>
              <FontAwesomeIcon icon={faFileDownload} /> Download CV
            </a>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faGraduationCap} /> My Learning Journey
          </h2>
          <div className={styles.timelineLine}>
            {[
              { year: "2014 - 2020", text: "Bouw-&Houtkunde at DIA Aarschot" },
              { year: "2020 - 2023", text: "Bouw at Thomas More Geel" },
              {
                year: "2023 - Now",
                text: "Application Development at Thomas More Geel",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
              >
                <span className={styles.timelineDot}></span>
                <span className={styles.timelineYear}>{item.year}</span>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interests */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>🎮 What I Love Doing</h2>
          <div className={styles.cardGrid}>
            {[
              { icon: faGamepad, text: "Programming games & engines" },
              { icon: faPalette, text: "Creating pixel art & UI/UX" },
              { icon: faBookOpen, text: "Reading, running, walking" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                whileHover={{ scale: 1.05 }}
              >
                <FontAwesomeIcon icon={item.icon} className={styles.cardIcon} />
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>🛠️ My Skills</h2>
          <div className={styles.cardGrid}>
            {[ 
              { name: ".NET", icon: <FaCogs />, level: "100%" },
              { name: "Python", icon: <DiPython />, level: "80%" },
              { name: "Java", icon: <DiJava />, level: "60%" },
            ].map((skill, i) => (
              <motion.div key={i} className={styles.skillCard} whileHover={{ scale: 1.05 }}>
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
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category Buttons */}
          <div className={styles.categoryBtns}>
            {["frontend", "backend", "tools", "other"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`${styles.categoryBtn} ${
                  activeCategory === cat ? styles.activeBtn : ""
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Skills by category */}
          <div className={styles.cardGrid}>
            {activeCategory === "backend" && (
              <>
                <SkillCard icon={<FaReact />} title="React" desc="Data, Backend" />
                <SkillCard icon={<SiLaravel />} title="Laravel" desc="PHP, Web" />
                <SkillCard icon={<FaGitAlt />} title="Git" desc="Version Control" />
              </>
            )}
            {activeCategory === "frontend" && (
              <SkillCard icon={<FaReact />} title="React" desc="UI, Frontend" />
            )}
            {activeCategory === "tools" && (
              <>
                <SkillCard icon={<SiIntellijidea />} title="IntelliJ IDEA" desc="Java, IDE" />
                <SkillCard icon={<SiDocker />} title="Docker" desc="DevOps, Containers" />
              </>
            )}
            {activeCategory === "other" && (
              <>
                <SkillCard icon={<FaCogs />} title="Unity" desc="Game Engine" />
                <SkillCard icon={<FaCogs />} title="Godot" desc="Game Engine" />
                <SkillCard icon={<FaCogs />} title="Business Skills" desc="Management" />
                <SkillCard icon={<FaCogs />} title="Communication" desc="Verbal, Written" />
              </>
            )}
          </div>
        </motion.section>
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

export default About;
