import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./layout_template.module.css";


function Layout({ children, title }) {
    const location = useLocation();

    return (
        <>
            {/* Header */}
            <header className={styles.navbarWrapper}>
                <nav className={styles.navbar}>
                    <div className={styles.navbarContent}>
                        <div className={styles.navLinks}>
                            <Link className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`} to="/">Home</Link>
                            <Link className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`} to="/about">About Me</Link>
                            <Link className={`${styles.navLink} ${location.pathname === '/projects' ? styles.active : ''}`} to="/projects">Projects</Link>
                            <Link className={`${styles.navLink} ${location.pathname === '/contact' ? styles.active : ''}`} to="/contact">Contact</Link>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main role="main" className="container pb-3">
                <h1>{title}</h1>
                {children}
            </main>

            {/* Footer */}
            <footer className={`${styles.footer} p-3 mt-5`}>
                <div className={styles.footerContent}>
                    <div className={styles.footerIcons}>
                        <a href="https://github.com/Bram-VE-02" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                            <FontAwesomeIcon icon={faGithub} className={styles.footerIcon} />
                        </a>
                        <Link to="/contact" className={styles.footerLink}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.footerIcon} />
                        </Link>
                    </div>
                    <div>&copy; 2025 Bram Van Eccelpoel | &copy; 2025 ThomasMore</div>
                </div>
            </footer>
        </>
    );
}

export default Layout;
