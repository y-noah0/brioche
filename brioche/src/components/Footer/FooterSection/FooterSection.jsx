// import React from 'react';
import styles from './style.module.css';

function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.contactUs}>
                    <h3>Contact Us</h3>
                    <p>+250 7884 404 82</p>
                    <p>Kagugu, KG 543 Street, Kigali, Rwanda</p>
                    <p>info@brioche.com</p>
                    <a href="#">view more</a>
                </div>
                <div className={styles.logo}>
                    <h2>Brioche</h2>
                    <p>The best way to find yourself is to lose yourself in the service of others.</p>
                    <div className={styles.socialIcons}>
                        <span>FB</span>
                        <span>TW</span>
                        <span>IG</span>
                    </div>
                </div>
                <div className={styles.workingHours}>
                    <h3>Working Hours</h3>
                    <p>Monday-Friday:</p>
                    <p>08:00 am -12:00 am</p>
                    <p>Saturday-Sunday:</p>
                    <p>07:00am -11:00 pm</p>
                </div>
            </div>
            <div className={styles.copyright}>
                <p> {currentYear} Brioche. All Rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;