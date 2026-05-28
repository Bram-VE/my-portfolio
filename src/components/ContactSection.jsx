import slimeGif from "../assets/gifs/slime_gif.gif";
import SocialLinks from "../components/SocialLinks";
import { FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/contact.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section foldOpen">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2 className="section-title fadeIn">Contact & Connect</h2>
          <p>
            Want to talk about an app, game project, work opportunity, or collaboration?
            Reach out through LinkedIn or GitHub.
          </p>
          <div className="contact-social">
            <SocialLinks />
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-gif large-only">
            <img src={slimeGif} alt="Fun GIF" />
          </div>
        </div>
      </div>
    </section>
  );
}
