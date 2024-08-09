// import React from 'react';
import styles from './style.module.css';

function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <h2>Newsletter</h2>
      <h3 className={styles.title}>Subscribe To Our Newsletter</h3>
      <p className={styles.subtitle}>And never miss latest Updates!</p>
      <form className={styles.form}>
        <input type="email" placeholder="Email Address" className={styles.input} />
        <button type="submit" className={styles.button}>Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;