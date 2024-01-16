import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.scss";

export const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.homeLink} to={"/home"}>
        Rebecca and Jeffrey
      </Link>
      <ul>
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
