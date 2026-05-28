import { FaMagic, FaReact, FaRegCopyright } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-card">
        <div className="footer-main">
          <div className="footer-item">
            <FaRegCopyright className="footer-icon" />
            <span>Bram Van Eccelpoel</span>
          </div>

          <div className="footer-item">
            <FaReact className="react-icon" />
            <span>Made in React</span>
          </div>

          <span className="footer-updated">Updated May 28</span>
        </div>

        <div className="footer-ai-note">
          <FaMagic aria-hidden="true" />
          <span>Portfolio refined with AI assistance for text and small style improvements.</span>
        </div>
      </div>
    </footer>
  );
}
