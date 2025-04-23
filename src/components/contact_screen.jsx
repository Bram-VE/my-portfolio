import React from 'react';
import Layout from './layout_template';
import styles from './contact_screen.module.css';

function Contact() {
  return (
    <Layout title="Contact">
      <div className={styles.homeContainer}>
        <section className={styles.introSection}>
          <div className={styles.introText}>
            <h1>Contact Me</h1>
            <p>Feel free to reach out to me through the contact details below:</p>
          </div>
        </section>

        <section className={styles.contactDetails}>
          <div className={styles.detailItem}>
            <h3>Email</h3>
            <p>
              You can email me directly at{' '}
              <a href="mailto:vaneccelpoelbram3@gmail.com">vaneccelpoelbram3@gmail.com</a>
            </p>
          </div>
          <div className={styles.detailItem}>
            <h3>LinkedIn</h3>
            <p>
              Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/bram-van-eccelpoel/" target="_blank" rel="noopener noreferrer">Bram Vaneccelpoel</a>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Contact;
