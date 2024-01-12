import styles from "./login.module.scss";
import lock from "../assets/login/lock.svg";
import arrow from "../assets/login/right-arrow.svg";
// import flowers_left from "../assets/login/flowers_left.png";
// import flowers_right from "../assets/login/flowers_right.png";
import flowers from "../assets/login/flowers.svg";
import bridge from "../assets/login/bridge.svg";
import san_jose from "../assets/login/san_jose.svg";

export default function Login() {
  return (
    <>
      <div className={styles.login_container}>
        {/* <img
          src={flowers_left}
          className={`${styles.image_noselect} ${styles.flowers_left}`}
          alt=""
        /> */}
        <img src={bridge} className={`${styles.image_noselect} ${styles.bridge}`} alt="" />
        <img src={san_jose} className={`${styles.image_noselect} ${styles.san_jose}`} alt="" />
        {/* <img
          src={flowers_right}
          className={`${styles.image_noselect} ${styles.flowers_right}`}
          alt=""
        /> */}
        <img src={flowers} className={`${styles.image_noselect} ${styles.flowers}`} alt="" />
        <div className={styles.intro_text}>Welcome to the wedding site of</div>
        <h1 className={styles.title_text}>Rebecca and Jeffrey</h1>
        <div className={styles.password_input_container}>
          <img className={styles.lock_image} src={lock} alt="" />
          <input
            className={styles.password_input}
            type="text"
            autoComplete="off"
            title="password"
          />
          <button className={styles.password_submit}>
            Submit
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
