import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.aboutTitle}>About</h2>
      <p className={styles.aboutDesc}>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
    </div>
  );
};

export default About;
