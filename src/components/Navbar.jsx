import { useState } from "react";
import "../styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToId: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsMenuOpen(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button onClick={() => handleScroll("home")} className="navbar-home">
          Home
        </button>
      </div>
      
      <button 
        className="navbar-hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <GiHamburgerMenu size={24} />
      </button>


      <div className="navbar-right">
        <button onClick={() => handleScroll("about")}>About</button>
        <button onClick={() => handleScroll("projects")}>Projects</button>
        <button onClick={() => handleScroll("contact")}>Contact</button>
        <button onClick={() => handleNavigate("/internship")}>Internship</button>
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-navbar-button"
        >
          Resume
        </a>
      </div>

      {isMenuOpen && (
        <div className="navbar-dropdown">
          <button onClick={() => handleScroll("about")}>About</button>
          <button onClick={() => handleScroll("projects")}>Projects</button>
          <button onClick={() => handleScroll("contact")}>Contact</button>
          <button onClick={() => handleNavigate("/internship")}>Internship</button>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-navbar-button"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
