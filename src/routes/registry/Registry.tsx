import styles from "./Registry.module.scss";
import header from "./assets/gifts_header.png";
import venmo from "./assets/venmo.jpg";
import paypal from "./assets/paypal.jpg";

export default function Registry() {
  return (
    <section className={styles.registryContainer}>
      <img src={header} alt="A note on gifts" />
      <div className={styles.registryText}>
        Your love, laughter, and presence on our special day is the greatest gift of all. If you'd
        like to further honor us, your contribution to our honeymoon fund would be deeply
        appreciated.
      </div>
      <div className={styles.options}>
        <div>
          Venmo
          <img src={venmo} alt="Venmo" />
        </div>
        <div>
          PayPal
          <img src={paypal} alt="PayPal" />
        </div>
      </div>
      <div>We look forward to celebrating our wedding day with you!</div>
    </section>
  );
}
