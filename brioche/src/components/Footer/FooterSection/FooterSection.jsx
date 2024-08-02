// import React from 'react';
import styles from './style.module.css';

function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.contactUs}>
                    <h4>Contact Us</h4>
                    <p>Kacyiru, KG 543 Street, Kigali, Rwanda</p>
                    <p>Kagugu, KG 543 Street, Kigali, Rwanda</p>
                    <p>Remera, KG 543 Street, Kigali, Rwanda</p>
                    <p>view more</p>
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
                    <h4>Working Hours</h4>
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