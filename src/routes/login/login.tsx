import React, { useCallback } from "react";
import styles from "./login.module.scss";
import lock from "../../assets/login/lock.svg";
import flowers_left from "../../assets/login/flowers_left.avif";
import flowers_right from "../../assets/login/flowers_right.avif";
import bridge from "../../assets/login/bridge.avif";
import san_jose from "../../assets/login/san_jose.svg";
import x_circle from "../../assets/login/x-circle.svg";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = React.useState("");
  const [isError, setError] = React.useState(false);

  const navigate = useNavigate();

  const updatePassword = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  }, []);

  const onSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "wendys") {
      localStorage.setItem("randj_valid", "true");
      navigate("/home");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className={styles.login_container}>
        <img
          src={flowers_left}
          className={`${styles.image_noselect} ${styles.flowers_left}`}
          alt=""
        />
        <img src={bridge} className={`${styles.image_noselect} ${styles.bridge}`} alt="" />
        <img src={san_jose} className={`${styles.image_noselect} ${styles.san_jose}`} alt="" />
        <img
          src={flowers_right}
          className={`${styles.image_noselect} ${styles.flowers_right}`}
          alt=""
        />
        <div className={styles.content_container}>
          <div className={styles.intro_text}>Welcome to the wedding site of</div>
          <div className={styles.title_text}>
            <div>Rebecca and Jeffrey</div>
          </div>
          <div className={styles.password_input_container}>
            <img className={styles.lock_image} src={lock} alt="" />
            <form className={styles.form} onSubmit={onSubmitClick}>
              <input
                onChange={updatePassword}
                className={styles.password_input}
                type="text"
                autoComplete="off"
                title="password"
                value={password}
              />
              <input type="submit" className={styles.password_submit} />
            </form>
          </div>

          {isError && (
            <div className={styles.error}>
              <img src={x_circle} alt="" />
              Your password is incorrect. Please try again!
            </div>
          )}
        </div>
      </div>
    </>
  );
}
