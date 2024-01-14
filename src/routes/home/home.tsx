import { Fragment } from "react";

import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import styles from "./home.module.scss";
import homepic from "../../assets/home/rebecca_jeff_home.jpg";
import homeflower from "../../assets/home/home_flower.jpg";

export default function Home() {
  const weddingDate = new Date("08/17/2024");
  const currentDate = new Date();

  const timeDiff = weddingDate.getTime() - currentDate.getTime();
  const daysRemaining = Math.round(timeDiff / (1000 * 3600 * 24));

  return (
    <Fragment>
      <NavigationBar />
      <div className={styles.topSection}>
        <img src={homepic} alt="Rebecca and Jeff" />
        <img src={homeflower} alt="" />
      </div>

      <div className={styles.divider} />
      <div className={styles.bottomSection}>
        <div className={styles.daysLeft}>{daysRemaining} days to go</div>
        <div className={styles.title}>Ceremony & reception</div>
        <div className={styles.dateTime}>
          <div>August 17</div>
          <div>4:00 PM - 10:00 PM</div>
        </div>
        <div className={styles.location}>
          <div>The Bridges Golf Club at San Ramon</div>
          <div>9000 S. Gale Bridge Rd.</div>
          <div>San Ramon, CA 94582</div>
        </div>
        <div className={styles.footNote}>Attire: Formal</div>
        <div className={styles.footNote}>
          <div>Outdoor Ceremony</div>
          <div>Indoor Reception</div>
        </div>
      </div>
    </Fragment>
  );
}
