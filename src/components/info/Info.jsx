import React from "react";
import styles from "./info.module.css";

const Info = () => {
  return (
    <div className={styles.info}>
      <img src="./profile-image.png" className={styles.infoImage} />
      <div className={styles.infoText}>
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <p>laurasmith.website</p>
      </div>
      <a
        href="https://www.linkedin.com/in/laurasmith/"
        className={styles.infoLink}
      >
        <img src="./mail-icon.png" />
        <span>Email</span>
      </a>
    </div>
  );
};

export default Info;
