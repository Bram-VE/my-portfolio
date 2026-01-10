import { FaRegCopyright, FaReact } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-card">
        <div className="footer-left">
          <FaRegCopyright className="footer-icon" />
          <span>Bram Van Eccelpoel</span>
        </div>

        <div className="footer-right">
          <FaReact className="react-icon" />
          <span>Made in React — 2026</span>
        </div>
      </div>
    </footer>
  );
}
