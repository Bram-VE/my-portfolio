import slimeGif from "../assets/gifs/slime_gif.gif";
import SocialLinks from "../components/SocialLinks";
import "../styles/contact.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section foldOpen">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2>Contact & Connect</h2>
          <p>Reach out or check my profiles below:</p>
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
