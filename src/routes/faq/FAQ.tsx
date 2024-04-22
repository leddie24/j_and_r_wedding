import { Link } from "react-router-dom";
import styles from "./FAQ.module.scss";

export default function FAQ() {
  return (
    <>
      <h2>Frequently Asked Questions</h2>
      <section className={styles.faqSection}>
        <h3>What time should guests arrive at the ceremony?</h3>
        <div>
          We respectfully ask guests to arrive 30 minutes prior to the ceremony. The ceremony will
          begin promptly at 4pm.
        </div>
      </section>
      <section className={styles.faqSection}>
        <h3>Can guests take photos during the ceremony?</h3>
        <div>
          While we kindly request that guests refrain from taking photos during the ceremony to
          ensure our professional photographers can capture the special moments unobstructed, we
          understand the desire to capture memories. If you must take a photo, we ask that you do so
          discreetly and refrain from obstructing others' views.
        </div>
      </section>
      <section className={styles.faqSection}>
        <h3>Are children welcome at the wedding and reception?</h3>
        <div>
          We're thrilled to celebrate our special day with all of our loved ones, including the
          little ones! While our wedding is kid-friendly, due to venue capacity, we have reserved a
          set number of spots for each party.{" "}
        </div>
      </section>
      <section className={styles.faqSection}>
        <h3>Can I bring a plus one?</h3>
        <div>
          We've allocated a specific number of seats for each guest as indicated on your RSVP card.
          We look forward to celebrating with you!
        </div>
      </section>
      <section className={styles.faqSection}>
        <h3>How can guests RSVP?</h3>
        <div>
          Please fill out your RSVP and send to us by mail (prepaid stamp and envelope are included
          with your invitation). For any issues with the RSVP process, please email us at{" "}
          <a className={styles.link} href="mailto:cholinhares@gmail.com">
            cholinhares@gmail.com
          </a>
        </div>
      </section>
      <section className={styles.faqSection}>
        <h3>
          I tried booking through the hotel block website, but it appears there are no rooms
          available. What should I do?
        </h3>
        <div>
          We are only allowed to block a set amount of rooms at a time. Once the rooms are filled,
          we will need to request for additional rooms. Please email us at cholinhares@gmail.com and
          let us know what type of room you need (one or two bedrooms), your check-in date and
          check-out date. We'll let you know when your room becomes available to book.
        </div>
      </section>
      <section className={styles.faqSection}>
        <h3>Will transportation be provided to and from the venue?</h3>
        <div>
          We will have a shuttle that will take guests to and from the venue. For schedule
          information, please take a look at{" "}
          <Link to="/the-big-day" className={styles.underline}>
            The Big Day
          </Link>{" "}
          page.
        </div>
      </section>
      <section className={`${styles.faqSection} ${styles.centered}`}>
        For any additional questions, please email us at{" "}
        <a className={styles.link} href="mailto:cholinhares@gmail.com">
          cholinhares@gmail.com
        </a>
      </section>
    </>
  );
}
