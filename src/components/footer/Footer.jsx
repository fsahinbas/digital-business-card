import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="./twitter-icon.png" />
      <img src="./facebook-icon.png" />
      <img src="./instagram-icon.png" />
      <img src="./linkedin-icon.png" />
      <img src="./github-icon.png" />
    </footer>
  );
};

export default Footer;
