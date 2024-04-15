import { Link, NavLink, useLocation } from "react-router-dom";
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

  console.log("id", useLocation());

  const onNavClick = () => {
    toggleMobileMenu();
  };

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
      {isMenuOpen && (
        <button className={styles.closeMenu} onClick={toggleMobileMenu}>
          <img src={xIcon} alt="close" />
        </button>
      )}
      <ul className={styles.itemsWrapper}>
        <li className={styles.mobileOnly}>
          <NavLink
            to={"/home"}
            onClick={onNavClick}
            className={({ isActive }) => [isActive ? styles.isActive : ""].join(" ")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/our-story"}
            onClick={onNavClick}
            className={({ isActive }) => [isActive ? styles.isActive : ""].join(" ")}
          >
            Our story
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/wedding-party"}
            onClick={onNavClick}
            className={({ isActive }) => [isActive ? styles.isActive : ""].join(" ")}
          >
            Wedding party
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/the-big-day"}
            onClick={onNavClick}
            className={({ isActive }) => [isActive ? styles.isActive : ""].join(" ")}
          >
            The big day
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/travel"}
            onClick={onNavClick}
            className={({ isActive }) => [isActive ? styles.isActive : ""].join(" ")}
          >
            Travel & stay
          </NavLink>
        </li>
        <li>
          <NavLink to={"/gallery"} onClick={onNavClick}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to={"/registry"} onClick={onNavClick}>
            Registry
          </NavLink>
        </li>
        <li>
          <NavLink to={"/faq"} onClick={onNavClick}>
            FAQs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
