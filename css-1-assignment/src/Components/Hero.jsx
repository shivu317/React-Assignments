import React from "react";
import styles from "./hero.module.css";
import heroImage from "./hero-image.jpg";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Your Title Here</h1>
        <p className={styles.subtitle}>Your Subtitle Here</p>
        <button className={styles.ctaButton}>Call to Action</button>
      </div>
      <div className={styles.heroImageContainer}>
        <img src={heroImage} alt="Hero" className={styles.heroImage} />
      </div>
    </section>
  );
}

export default Hero;
