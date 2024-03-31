import styles from "./Gallery.module.scss";

import gallery_1 from "./images/gallery_1.jpg";
import gallery_2 from "./images/gallery_2.jpg";
import gallery_3 from "./images/gallery_3.jpg";
import gallery_4 from "./images/gallery_4.jpg";
import gallery_5 from "./images/gallery_5.jpg";
import gallery_6 from "./images/gallery_6.jpg";
import gallery_7 from "./images/gallery_7.jpg";
import gallery_8 from "./images/gallery_8.jpg";
import gallery_9 from "./images/gallery_9.jpg";
import gallery_10 from "./images/gallery_10.jpg";
import gallery_11 from "./images/gallery_11.jpg";
import gallery_12 from "./images/gallery_12.jpg";
import gallery_13 from "./images/gallery_13.jpg";
import gallery_14 from "./images/gallery_14.jpg";
import gallery_15 from "./images/gallery_15.jpg";
import gallery_16 from "./images/gallery_16.jpg";
import gallery_17 from "./images/gallery_17.jpg";
import gallery_18 from "./images/gallery_18.jpg";

export default function Gallery() {
  const images = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
    gallery_9,
    gallery_10,
    gallery_11,
    gallery_12,
    gallery_13,
    gallery_14,
    gallery_15,
    gallery_16,
    gallery_17,
    gallery_18,
  ];

  return (
    <div className={styles.gallery}>
      {images.map((image) => {
        return <img src={image} alt="wedding picture" />;
      })}
    </div>
  );
}
