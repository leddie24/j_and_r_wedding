import { Navigate, Outlet } from "react-router-dom";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import styles from "./NavBarWrapper.module.scss";
import React, { useEffect } from "react";

export const NavBarWrapper = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    const onLoad = function () {
      setIsLoaded(true);
    };

    window.addEventListener("load", onLoad);

    return function cleanup() {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  const isAuthenticated = !!localStorage.getItem("randj_valid");

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const contentWrapperClasses = [styles.contentWrapper];
  if (!isLoaded) {
    contentWrapperClasses.push(styles.loading);
  }

  return (
    <div className={styles.bgWrapper}>
      <div className={styles.container}>
        <NavigationBar />
        <div className={contentWrapperClasses.join(" ")}>
          <Outlet />
        </div>
      </div>
      <span className={styles.footer}>© Cho Linhares 2024</span>
    </div>
  );
};
