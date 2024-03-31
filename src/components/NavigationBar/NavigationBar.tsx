import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import React from "react";

import xIcon from "./xIcon.svg";

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const rootClass = [styles.navbar];
  if (isMenuOpen) {
    rootClass.push(styles.mobileMenuOpen);
  }

  let resizeTimer: NodeJS.Timeout;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });

  return (
    <nav className={rootClass.join(" ")}>
      <Link className={styles.homeLink} to={"/home"}>
        Rebecca and Jeffrey
      </Link>
      <div className={styles.mobileMenu} onClick={toggleMobileMenu}>
        <span />
        <span />
        <span />
      </div>
      <ul className={styles.itemsWrapper}>
        {isMenuOpen && (
          <button className={styles.closeMenu} onClick={toggleMobileMenu}>
            <img src={xIcon} alt="close" />
          </button>
        )}
        <li className={styles.mobileOnly}>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/our-story"}>Our story</Link>
        </li>
        <li>
          <Link to={"/wedding-party"}>Wedding party</Link>
        </li>
        <li>
          <Link to={"/the-big-day"}>The big day</Link>
        </li>
        <li>
          <Link to={"/travel"}>Travel & stay</Link>
        </li>
        <li>
          <Link to={"/gallery"}>Gallery</Link>
        </li>
        <li>
          <Link to={"/registry"}>Registry</Link>
        </li>
        <li>
          <Link to={"/faq"}>FAQs</Link>
        </li>
      </ul>
    </nav>
  );
};
