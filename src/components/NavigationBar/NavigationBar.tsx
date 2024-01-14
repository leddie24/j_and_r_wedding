import styles from "./NavigationBar.module.scss";

export const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#">Rebecca and Jeffrey</a>
      <ul>
        <li>Our story</li>
        <li>Wedding party</li>
        <li>The big day</li>
        <li>Travel & stay</li>
        <li>Gallery</li>
        <li>Registry</li>
        <li>FAQs</li>
      </ul>
    </nav>
  );
};
