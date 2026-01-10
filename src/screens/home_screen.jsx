import "../styles/base.css";
import "../styles/home.css";
import "../styles/animations.css";

import { FaMapMarkerAlt } from "react-icons/fa";
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
  return (
    <main className="home-container">
      <Navbar />
      <WaveBackground />

      <section className="home-content foldOpen">
        <div className="home-text-wrapper fadeIn">
          <div className="flex">
            <h1 className="home-name">Bram Van Eccelpoel</h1>
            <div className="small-only mobile-small-only">
              <GlowImage
                src={myPhoto}
                alt="Bram Van Eccelpoel"
              />
            </div>

          </div>

          <p className="home-subtitle">
            Student Application Development and Freelance Game Developer
          </p>

          <div className="home-location floatUpDown">
            <FaMapMarkerAlt className="location-icon floatUpDown" />
            <span>Belgium, Herselt</span>
          </div>
        </div>

        <div className="large-only">
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

        <section className="about-card foldOpen">
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
                    <h2>Also known as Devluke</h2>
                  </div>
                  <p>
                    Passionate student and indie game developer. I love creating games,
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
