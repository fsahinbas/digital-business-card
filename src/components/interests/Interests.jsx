import React from "react";
import styles from "./interests.module.css";

const Interests = () => {
  return (
    <div className={styles.interests}>
      <h2 className={styles.interestsTitle}>Interests</h2>
      <p className={styles.interestsDesc}>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
};

export default Interests;
