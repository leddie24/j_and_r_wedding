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

export default function OurStory() {
  return (
    <>
      <div className={styles.container_image_left}>
        <figure>
          <img src={img_2013} alt="" />
          <figcaption>Margaritaville, Capitola, CA</figcaption>
        </figure>
        <div className={styles.container_text}>
          <h3>2013</h3>
          <div>
            We first met on June 15th, 2013 at a birthday party at Margaritaville in Capitola.
            Shortly after, we became facebook friends and met twice more in group outings. Jeff
            recalls me complimenting him on how funny he is (which I don't remember that
            conversation 😝).
          </div>
          <div>
            📸 Fun fact: There was a photographer at the birthday party who captured a photo of me
            with Jeff in the background on the day we met.
          </div>
        </div>
      </div>
      <div className={styles.container_image_left}>
        <div className={styles.container_text}>
          <h3>2019</h3>
          <div>
            6 years later, we connected again when Jeff sent me a message via facebook in response
            one of my stories. I captured his interest with my guitar skills⚡️ 🎸. At the time, I
            was living in NYC and Jeff was in San Francisco. I had the opportunity to visit home for
            a week, so we decided to meet up at a local bar to catch up. Afterwards, Jeff asked me
            on a date where we had dinner at Bella Trattoria in San Francisco, then to an Irish Bar
            for Karaoke and Whiskey. The night extended into the wee hours the next morning, which
            happened to be on Valentine's Day! 💌
          </div>
          <div>
            Since that date, we ended up talking every day and night. We met again a few months
            later in Vegas, where we had yet another amazing weekend. We became official on August
            17, 2019! 🫶🏼
          </div>
        </div>
        <figure>
          <img src="https://dummyimage.com/498x351.jpg" alt="" />
          <figcaption>Las Vegas, NV</figcaption>
        </figure>
      </div>
      <div>
        <h3>Througout the years</h3>
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
    </>
  );
}
