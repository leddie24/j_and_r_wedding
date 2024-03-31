import { Outlet } from "react-router-dom";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import styles from "./NavBarWrapper.module.scss";

export const NavBarWrapper = () => {
  return (
    <div className={styles.bgWrapper}>
      <div className={styles.container}>
        <NavigationBar />
        <Outlet />
      </div>
    </div>
  );
};
