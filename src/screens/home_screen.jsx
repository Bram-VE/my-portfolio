import "../styles/base.css";
import "../styles/home.css";
import "../styles/animations.css";

import { FaGamepad, FaLaptopCode, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import myPhoto from "../assets/images/profile_pic.jpg";
import myPhotoDevluke from "../assets/images/profile_pic_devluke.png";
import shipPicture from "../assets/images/ship.png";

import WaveBackground from "../components/WaveBackground";
import GlowImage from "../components/GlowImage";
import SocialLinks from "../components/SocialLinks";
import ProfileSection from "../components/ProfileSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollToId;

    if (!targetId) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 80);

    return () => window.clearTimeout(timeoutId);
  }, [location.state]);

  return (
    <main className="home-container">
      <Navbar />
      <WaveBackground />

      <section id="home" className="home-content foldOpen">
        <div className="home-text-wrapper fadeIn">
          <div className="home-heading-row">
            <h1 className="home-name">Bram Van Eccelpoel</h1>
            <div className="home-photo-mobile">
              <GlowImage
                src={myPhoto}
                alt="Bram Van Eccelpoel"
              />
            </div>
          </div>

          <p className="home-subtitle">
            Application and Game Developer
          </p>

          <p className="home-intro">
            I build practical applications and indie games, with a focus on .NET,
            Godot, clean interfaces, and playful technical ideas.
          </p>

          <div className="home-meta">
            <div className="home-location">
              <FaMapMarkerAlt className="location-icon" />
              <span>Herselt, Belgium</span>
            </div>
            <span className="home-role-pill">
              <FaLaptopCode aria-hidden="true" />
              App Dev
            </span>
            <span className="home-role-pill">
              <FaGamepad aria-hidden="true" />
              Game Dev
            </span>
          </div>
        </div>

        <div className="home-photo-desktop">
          <GlowImage
            src={myPhoto}
            alt="Bram Van Eccelpoel"
          />
        </div>
      </section>

      <div className="about-wrapper">
        <img
          src={shipPicture}
          alt="Pixel Art Ship"
          className="about-pixelart rock"
        />

        <section className="about-card foldOpen" aria-labelledby="devluke-title">
          <div className="about-card-content">
            <img
              src={myPhotoDevluke}
              alt="Devluke"
              className="about-card-photo large-only fadeIn"
            />

            <div className="about-card-text">
              <div className="flex">
                <img
                  src={myPhotoDevluke}
                  alt="Devluke"
                  className="about-card-photo small-only"
                />
                <div>
                  <div className="flex">
                    <img
                      src={myPhotoDevluke}
                      alt="Devluke"
                      className="about-card-photo mobile-small-only"
                    />
                    <h2 id="devluke-title">Also known as Devluke</h2>
                  </div>
                  <p>
                    Passionate indie game developer. I love creating games,
                    programming applications, and designing pixel-art. Always exploring
                    new ideas!
                  </p>
                </div>
              </div>
              <div className="Social-wrapper">
                <SocialLinks />
                <div className="resume-button-wrapper">
                  <a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-button"
                  >
                    View My Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ProfileSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
