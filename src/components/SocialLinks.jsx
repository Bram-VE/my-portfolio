import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaReddit
} from "react-icons/fa";
import ItchIcon from "../components/ItchIcon";
import "../styles/social-links.css";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/bram-van-eccelpoel/"
        target="_blank"
        title="LinkedIn"
        style={{ "--i": 1, "--flash-delay": "3s", "--flash-duration": "6s" }}
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/DevlukeDevlog"
        target="_blank"
        title="GitHub Devluke"
        style={{ "--i": 3, "--flash-delay": "4s", "--flash-duration": "6s" }}
      >
        <FaGithub />
      </a>

      <a
        href="mailto:vaneccelpoelbram3@gmail.com"
        title="Email"
        style={{ "--i": 4, "--flash-delay": "4.5s", "--flash-duration": "6s" }}
      >
        <FaEnvelope />
      </a>

      <a
        href="https://devlukedevlog.itch.io/"
        target="_blank"
        title="Itch.io"
        style={{ "--i": 6, "--flash-delay": "5.5s", "--flash-duration": "6s" }}
      >
        <ItchIcon />
      </a>
    </div>
  );
}
