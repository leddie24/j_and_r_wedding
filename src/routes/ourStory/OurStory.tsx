import styles from "./OurStory.module.scss";
import img_2013 from "./images/2013.avif";
import img_1 from "./images/1.avif";
import img_2 from "./images/2.avif";
import img_3 from "./images/3.avif";
import img_4 from "./images/4.avif";
import img_5 from "./images/5.avif";
import img_6 from "./images/6.avif";
import img_7 from "./images/7.avif";
import img_8 from "./images/8.avif";
import img_2023_1 from "./images/2023_1.jpg";
import img_2023_2 from "./images/2023_2.jpg";
import img_2019 from "./images/2019.jpg";

export default function OurStory() {
  return (
    <>
      <div className={styles.section}>
        <figure>
          <img src={img_2013} alt="" width={498} height={391} />
          <figcaption>Margaritaville, Capitola, CA</figcaption>
        </figure>
        <div className={styles.container_text}>
          <h3>2013</h3>
          <div>
            Rebecca and Jeff first met on June 15th, 2013 at a birthday party at Margaritaville in
            Capitola. Shortly after, they became facebook friends and met twice more in group
            outings. Jeff recalls Rebecca complimenting him on how funny he is (however, Rebecca
            doesn't remember that conversation 😝).
          </div>
          <div>
            📸 Fun fact: There was a photographer at the birthday party who captured a photo of
            Rebecca with Jeff in the background on the day they met.
          </div>
        </div>
      </div>
      <div className={`${styles.section} ${styles.mobileReverse}`}>
        <div className={styles.container_text}>
          <h3>2019</h3>
          <div>
            6 years later, they reconnected when Jeff messaged Rebecca via Facebook in response to
            one of her stories. Rebecca captured his interest with her guitar skills⚡️ 🎸. At the
            time, Rebecca was living in NYC and Jeff in San Francisco. Rebecca had the opportunity
            to visit home for a week, so they decided to meet up at a local bar to catch up.
            Afterwards, Jeff asked Rebecca on a date to Bella Trattoria in San Francisco, then to an
            Irish Bar for karaoke and whiskey. The night extended into the wee hours the next
            morning, which happened to be on Valentine's Day! 💌
          </div>
          <div>
            Since that date, they ended up talking every day and night. They met again a few months
            later in Vegas, where they had yet another amazing weekend. They became official on
            August 17, 2019! 🫶🏼
          </div>
        </div>
        <figure>
          <img src={img_2019} alt="2019 image" />
          <figcaption>Las Vegas, NV</figcaption>
        </figure>
      </div>
      <div>
        <h3>Throughout the years</h3>
        <div className={styles.image_grid}>
          <img src={img_1} />
          <img src={img_2} />
          <img src={img_3} />
          <img src={img_4} />
          <img src={img_5} />
          <img src={img_6} />
          <img src={img_7} />
          <img src={img_8} />
        </div>
      </div>

      <div className={styles.section}>
        <img src={img_2023_1} alt="" />
        <div className={styles.container_text}>
          <h3>2023</h3>
          <div>
            The proposal: Rebecca and Jeff planned a trip to Maine and Boston in June to celebrate
            Gabe and Christina's wedding and enjoy some traveling.
          </div>
          <div>
            On June 17th, 2023 they arrived at Smith & Wollensky and had an unforgettable experience
            - their food was amazing, waiter was the best they ever had, and Jeff and Rebecca had
            heartfelt conversations about their future, goals, and what they love about each other
            and their families.
          </div>
          <div>
            When Rebecca stepped into the bathroom after dinner, a song in the background caught her
            attention. It was playing Margaritaville by Jimmy Buffet, which reminded her of the
            place where she met Jeff for the first time. What were the odds?
          </div>
          <div>
            After leaving the restaurant, they decided to take a walk along the pier before heading
            back to their hotel. They stopped in front of the Boston Tea Party site, and that was
            when Jeff proposed. Of course, REBECCA SAID YES! 💍
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <img src={img_2023_2} alt="" />
        <div className={styles.container_text}>
          <div>
            We chose to celebrate our wedding on August 17th, 2024 which falls on the exact date of
            our 5 year anniversary.
          </div>
          <div>
            We cannot wait to celebrate with all of you and can't thank you enough for all the love
            and support you've given us.
          </div>
          <div>Now let the party begin! 💃🏻🕺🏻</div>
        </div>
      </div>
    </>
  );
}
