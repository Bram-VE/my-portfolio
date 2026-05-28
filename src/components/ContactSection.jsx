import slimeGif from "../assets/gifs/slime_gif.gif";
import SocialLinks from "../components/SocialLinks";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/contact.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section foldOpen">
      <div className="contact-wrapper">
        <div className="contact-left">
          <p className="section-kicker">Contact</p>
          <h2>Contact & Connect</h2>
          <p>
            Want to talk about an app, game project, internship, or collaboration?
            You can reach me directly or find me on these platforms.
          </p>

          <div className="contact-details">
            <a href="mailto:vaneccelpoelbram3@gmail.com" className="contact-detail">
              <FaEnvelope aria-hidden="true" />
              <span>vaneccelpoelbram3@gmail.com</span>
            </a>
            <div className="contact-detail">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>Herselt, Belgium</span>
            </div>
          </div>

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
