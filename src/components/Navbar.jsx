import { useState } from "react";
import "../styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi"; // Using react-icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking
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
      </div>

      {isMenuOpen && (
        <div className="navbar-dropdown">
          <button onClick={() => handleScroll("about")}>About</button>
          <button onClick={() => handleScroll("projects")}>Projects</button>
          <button onClick={() => handleScroll("contact")}>Contact</button>
        </div>
      )}
    </nav>
  );
}
