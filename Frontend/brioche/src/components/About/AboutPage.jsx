// AboutPage.jsx
import { Coffee } from 'lucide-react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Our Story</h2>
        
        <div className={styles.storyGrid}>
          <div>
            <p className={styles.paragraph}>
              Founded in 2015, Brioche is the culmination of a passion for exquisite pastries and a love for both Rwandan and European culinary traditions. Our journey began when our founder, inspired by travels through Rwanda's lush coffee plantations and Europe's charming patisseries, envisioned a bakery that would bridge these two worlds.
            </p>
            <p className={styles.paragraph}>
              At Brioche, we believe in the power of food to connect cultures and create unforgettable experiences. Every pastry we craft tells a story of heritage, innovation, and the simple joy of savoring life's sweet moments.
            </p>
          </div>
          <div className={styles.missionBox}>
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <ul className={styles.missionList}>
              <li>To create pastries that delight and inspire</li>
              <li>To showcase the finest ingredients from Rwanda and Europe</li>
              <li>To foster a community around the love of great food</li>
              <li>To continually innovate while respecting tradition</li>
            </ul>
          </div>
        </div>

        <div className={styles.featuresSection}>
          <h3 className={styles.featuresTitle}>What Sets Us Apart</h3>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <Coffee className={styles.featureIcon} size={32} />
              <h4 className={styles.featureTitle}>Rwandan Coffee</h4>
              <p>We use only the finest, ethically sourced Rwandan coffee beans in our pastries and beverages.</p>
            </div>
            <div className={styles.featureCard}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.featureIcon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
              </svg>
              <h4 className={styles.featureTitle}>European Techniques</h4>
              <p>Our master bakers blend traditional European methods with innovative twists for unique flavors.</p>
            </div>
            <div className={styles.featureCard}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.featureIcon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
              <h4 className={styles.featureTitle}>Artisanal Craftsmanship</h4>
              <p>Each pastry is handcrafted with care, ensuring quality and attention to detail in every bite.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;