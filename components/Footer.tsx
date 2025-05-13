import styles from '../styles/Footer.module.scss';
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className={`d-flex align-items-center mb-2 ${styles.footerContactItem}`}>
                            <span className={`${styles.iconCircle} ${styles.mailIcon}`}> {/* Placeholder for Mail SVG */}
                            <IoMail /> 
                            </span>
                            <span className={styles.footerText}>codeup@email.com</span>
                        </div>
                        <div className={`d-flex align-items-center ${styles.footerContactItem}`}>
                            <span className={`${styles.iconCircle} ${styles.pinIcon}`}> {/* Placeholder for Pin SVG */}
                            <FaLocationDot />
                            </span>
                            <span className={styles.footerText}>Buenos Aires, Argentina</span>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
                        <img src="/images/logo.svg" alt="Logo" className={styles.footerLogo} />
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;