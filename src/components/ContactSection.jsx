import slimeGif from "../assets/gifs/slime_gif.gif";
import SocialLinks from "../components/SocialLinks";
import "../styles/contact.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section foldOpen">
      <div className="contact-wrapper">
        {/* Left side - title, description, social links, resume */}
        <div className="contact-left">
          <h2>Contact & Connect</h2>
          <p>Reach out or check my profiles below:</p>
          <div className="contact-social">
            <SocialLinks />
          </div>
          <a
            href="/CV_BramVanEccelpoel.pdf"
            download
            className="resume-button"
          >
            Download My Resume
          </a>
        </div>

        {/* Right side - GIF only */}
        <div className="contact-right">
          <div className="contact-gif large-only">
            <img src={slimeGif} alt="Fun GIF" />
          </div>
        </div>
      </div>
    </section>
  );
}
