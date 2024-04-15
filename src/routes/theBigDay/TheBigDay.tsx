import styles from "./TheBigDay.module.scss";
import venue from "./venue.jpg";
import header from "./header.png";

export default function OurStory() {
  return (
    <>
      <img src={venue} className={styles.venueImage} alt="The Bridges golf club" />
      <img src={header} className={styles.headerImage} alt="The Bridges golf club" />
      <section className={styles.information}>
        <section>
          <div>Ceremony &amp; Reception</div>
          <div>The Bridges Golf Club at San Ramon</div>
          <div>9000 S. Gale Bridge Rd.</div>
          <div>San Ramon, CA 94582</div>
        </section>
        <section>
          <div>Saturday, August 17,2024</div>
          <div>Ceremony: 4:00pm</div>
          <div>Cocktail Hour: 4:30pm to 5:30pm </div>
          <div>Indoor Reception: 5:30pm to 10:00pm </div>
        </section>
      </section>
    </>
  );
}
