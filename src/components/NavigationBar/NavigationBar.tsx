import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.scss";

export const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.homeLink} href="#">
        Rebecca and Jeffrey
      </a>
      <ul>
        <li>
          <Link to={"/ourstory"}>Our story</Link>
        </li>
        <li>
          <Link to={"/weddingparty"}>Wedding party</Link>
        </li>
        <li>
          <Link to={"/thebigday"}>The big day</Link>
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
