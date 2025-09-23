import React from 'react';
import Layout from './layout_template';
import styles from './contact_screen.module.css';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <Layout title="Contact">
      <div className={styles.container}>
        {/* Hero / CTA Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroText}>
            <h1>Let's Connect!</h1>
            <p>Have a project idea or just want to say hi? Reach out to me via Email or LinkedIn!</p>
          </div>
        </section>

        {/* Contact Details */}
        <section className={styles.contactDetails}>
          <div className={styles.detailItem}>
            <FaEnvelope size={40} className={styles.icon} />
            <h3>Email Me</h3>
            <p>You can email me directly at:</p>
            <a href="mailto:vaneccelpoelbram3@gmail.com">vaneccelpoelbram3@gmail.com</a>
            <a className={styles.contactButton} href="mailto:vaneccelpoelbram3@gmail.com">Send Email</a>
          </div>

          <div className={styles.detailItem}>
            <FaLinkedin size={40} className={styles.icon} />
            <h3>LinkedIn</h3>
            <p>Connect with me professionally on LinkedIn:</p>
            <a href="https://www.linkedin.com/in/bram-van-eccelpoel/" target="_blank" rel="noopener noreferrer">Bram Van Eccelpoel</a>
            <a className={styles.contactButton} href="https://www.linkedin.com/in/bram-van-eccelpoel/" target="_blank" rel="noopener noreferrer">Visit LinkedIn</a>
          </div>
        </section>

        {/* Encouragement Section */}
        <section className={styles.ctaSection}>
          <h2>💬 Want to chat?</h2>
          <p>Don't hesitate to reach out! I love discussing new projects, games, or coding ideas.</p>
          <a className={styles.cvBtn} href="mailto:vaneccelpoelbram3@gmail.com">Contact Me Now</a>
        </section>
      </div>
    </Layout>
  );
}

export default Contact;
