import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import styles from "./home.module.scss";
import homepic from "../../assets/home/rebecca_jeff_home.jpg";

export default function Home() {
  const weddingDate = new Date("08/17/2024");
  const currentDate = new Date();

  const timeDiff = weddingDate.getTime() - currentDate.getTime();
  const daysRemaining = Math.round(timeDiff / (1000 * 3600 * 24));

  return (
    <div className="container">
      <NavigationBar />
      <div className={styles.topSection}>
        <div className={styles.picContainer}>
          <img src={homepic} alt="Rebecca and Jeff" />
        </div>
        <div className={styles.homeFlower}>
          <div className={styles.contentContainer}>
            <div className={styles.names}>Rebecca & Jeffrey</div>
            <div className={styles.date}>August 17, 2024</div>
          </div>
        </div>
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
    </div>
  );
}
