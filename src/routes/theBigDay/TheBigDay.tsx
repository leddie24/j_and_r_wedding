import styles from "./TheBigDay.module.scss";
import venue from "./venue.jpg";
import header from "./header.png";
import { MingcuteTimeLine } from "./assets/clock";
import { PhSunBold } from "./assets/sun";
import { MingcuteBus2Line } from "./assets/bus";
import { BxCar } from "./assets/car";

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
          <div>Cocktail Hour: 4:30pm to 5:30pm</div>
          <div>Indoor Reception: 5:30pm to 10:00pm</div>
        </section>
      </section>
      <section className={styles.notes}>
        <h2>Note to Our Guests:</h2>
        <ul>
          <li>
            <MingcuteTimeLine />
            We ask all guests to please arrive on time as the ceremony will start promptly at 4:00
            PM
          </li>
          <li>
            <PhSunBold />
            The ceremony will be held outdoors. Please keep in mind the average high temperature in
            August is 87°F, with a low of 63°F. We kindly recommend bringing a hat and/or shades to
            ensure your comfort during the ceremony.
          </li>
          <li>
            <MingcuteBus2Line />
            <div className={styles.spaceBelow}>
              We will have a shuttle that will take guests to and from the venue.
            </div>
            <div className={styles.spaceBelow}>
              Pick up times from The Residence Inn by Marriott to venue:
            </div>
            <div className={styles.spaceBelow}>
              3:20pm
              <br />
              3:40pm
            </div>
            <div className={styles.spaceBelow}>
              Pick up times from venue to The Residence Inn by Marriott:
            </div>
            <div className={styles.spaceBelow}>
              8:00
              <br />
              8:20
              <br />
              8:40
              <br />
              9:00
              <br />
              9:20
              <br />
              9:40
              <br />
              10:00
              <br />
              10:30 (last shuttle for guests)
              <br />
              10:45 (wedding party only)
            </div>
          </li>
          <li>
            <BxCar />
            If you plan on driving to the venue, free parking is available. Please drive safely and
            responsibly.
          </li>
        </ul>
      </section>
    </>
  );
}
