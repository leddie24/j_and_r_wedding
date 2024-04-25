import styles from "./WeddingParty.module.scss";
import bridal_header from "./images/bridal_heading.png";
import bridal_1 from "./images/bridal_1.png";
import bridal_2 from "./images/bridal_2.png";
import bridal_3 from "./images/bridal_3.png";
import bridal_4 from "./images/bridal_4.png";
import bridal_5 from "./images/bridal_5.png";
import bridal_6 from "./images/bridal_6.png";
import bridal_7 from "./images/bridal_7.png";
import bridal_8 from "./images/bridal_8.png";
import bridal_9 from "./images/bridal_9.png";
import bridal_10 from "./images/bridal_10.png";
import bridal_11 from "./images/bridal_11.png";
import bridal_12 from "./images/bridal_12.png";
import bridal_13 from "./images/bridal_13.png";
import bridal_14 from "./images/bridal_14.png";
import bridal_15 from "./images/bridal_15.png";
import bridal_16 from "./images/bridal_16.png";

import groomsmen_header from "./images/groomsmen_header.png";
import groomsmen_1 from "./images/groomsmen_1.png";
import groomsmen_2 from "./images/groomsmen_2.png";
import groomsmen_3 from "./images/groomsmen_3.png";
import groomsmen_4 from "./images/groomsmen_4.png";
import groomsmen_5 from "./images/groomsmen_5.png";
import groomsmen_6 from "./images/groomsmen_6.png";
import groomsmen_7 from "./images/groomsmen_7.png";
import groomsmen_8 from "./images/groomsmen_8.png";
import groomsmen_9 from "./images/groomsmen_9.png";
import groomsmen_10 from "./images/groomsmen_10.png";
import groomsmen_11 from "./images/groomsmen_11.png";
import groomsmen_12 from "./images/groomsmen_12.png";
import groomsmen_13 from "./images/groomsmen_13.png";
import groomsmen_14 from "./images/groomsmen_14.png";
import groomsmen_15 from "./images/groomsmen_15.png";
import groomsmen_16 from "./images/groomsmen_16.png";
import groomsmen_17 from "./images/groomsmen_17.png";
import groomsmen_18 from "./images/groomsmen_18.png";
import groomsmen_19 from "./images/groomsmen_19.png";
import groomsmen_20 from "./images/groomsmen_20.png";
import groomsmen_21 from "./images/groomsmen_21.png";
import groomsmen_22 from "./images/groomsmen_22.png";
import groomsmen_23 from "./images/groomsmen_23.png";

import kids_header from "./images/kids_header.png";
import kid_1 from "./images/kid_1.png";
import kid_2 from "./images/kid_2.png";
import kid_3 from "./images/kid_3.png";
import kid_4 from "./images/kid_4.png";

interface WeddingMember {
  name: string;
  role: string;
  picture: string;
}

export default function WeddingParty() {
  const bridalParty: WeddingMember[] = [
    {
      name: "Maureen Cho",
      role: "Matron of Honor",
      picture: bridal_1,
    },
    {
      name: "Monica Cho",
      role: "Maid of Honor",
      picture: bridal_2,
    },
    {
      name: "Francesca Linhares",
      role: "Bridesmaid",
      picture: bridal_3,
    },
    {
      name: "Geraldine Linhares",
      role: "Bridesmaid",
      picture: bridal_4,
    },
    {
      name: "Sarah McCarthy",
      role: "Bridesmaid",
      picture: bridal_5,
    },
    {
      name: "Kylie Stone",
      role: "Bridesmaid",
      picture: bridal_6,
    },
    {
      name: "Susan Hsieh",
      role: "Bridesmaid",
      picture: bridal_7,
    },
    {
      name: "Antonia Rodgers",
      role: "Bridesmaid",
      picture: bridal_8,
    },
    {
      name: "Trina Beltramo",
      role: "Bridesmaid",
      picture: bridal_9,
    },
    {
      name: "Kira Stokes",
      role: "Bridesmaid",
      picture: bridal_10,
    },
    {
      name: "Bryana Israelyan",
      role: "Bridesmaid",
      picture: bridal_11,
    },
    {
      name: "Maria Dellafemina",
      role: "Bridesmaid",
      picture: bridal_12,
    },
    {
      name: "Marina Reyes",
      role: "Bridesmaid",
      picture: bridal_13,
    },
    {
      name: "Ariana Stone Sullivan",
      role: "Bridesmaid",
      picture: bridal_14,
    },
    {
      name: "Michelle Bautista",
      role: "Bridesmaid",
      picture: bridal_15,
    },
    {
      name: "Katelyn Dawson",
      role: "Bridesmaid",
      picture: bridal_16,
    },
  ];

  const groomsmenParty: WeddingMember[] = [
    {
      name: "Matthew Linhares",
      role: "Best Man",
      picture: groomsmen_1,
    },
    {
      name: "Sean Flanagan",
      role: "Groomsman",
      picture: groomsmen_2,
    },
    {
      name: "Christopher Lee",
      role: "Groomsman",
      picture: groomsmen_3,
    },
    {
      name: "Joshua Pretti",
      role: "Groomsman",
      picture: groomsmen_4,
    },
    {
      name: "Jameson Pretti",
      role: "Groomsman",
      picture: groomsmen_5,
    },
    {
      name: "Kyle Alger",
      role: "Groomsman",
      picture: groomsmen_6,
    },
    {
      name: "Andrew Bautista",
      role: "Groomsman",
      picture: groomsmen_7,
    },
    {
      name: "Matthew Watkins",
      role: "Groomsman",
      picture: groomsmen_8,
    },
    {
      name: "Mitchell McMahon",
      role: "Groomsman",
      picture: groomsmen_9,
    },
    {
      name: "Andy Hopkins",
      role: "Groomsman",
      picture: groomsmen_10,
    },
    {
      name: "Taylor Vellios",
      role: "Groomsman",
      picture: groomsmen_11,
    },
    {
      name: "Chase Cruickshank",
      role: "Groomsman",
      picture: groomsmen_12,
    },
    {
      name: "Raffi Sarkissian",
      role: "Groomsman",
      picture: groomsmen_13,
    },
    {
      name: "Arman Israelyan",
      role: "Groomsman",
      picture: groomsmen_14,
    },
    {
      name: "Sean Phillips",
      role: "Groomsman",
      picture: groomsmen_15,
    },
    {
      name: "Joey Martin",
      role: "Groomsman",
      picture: groomsmen_16,
    },
    {
      name: "Matthew Donovan",
      role: "Groomsman",
      picture: groomsmen_17,
    },
    {
      name: "Nick Alonzo",
      role: "Groomsman",
      picture: groomsmen_18,
    },
    {
      name: "Evan Sangetta",
      role: "Groomsman",
      picture: groomsmen_19,
    },
    {
      name: "Pedro Martinez",
      role: "Groomsman",
      picture: groomsmen_20,
    },
    {
      name: "Paul Gonzales",
      role: "Groomsman",
      picture: groomsmen_21,
    },
    {
      name: "Vince Adams",
      role: "Groomsman",
      picture: groomsmen_22,
    },
    {
      name: "Skylar Adams",
      role: "Groomsman",
      picture: groomsmen_23,
    },
  ];

  const kidsClub: WeddingMember[] = [
    {
      name: "Juniper Linhares",
      role: "Flower Girl",
      picture: kid_1,
    },
    {
      name: "Owen Flanagan",
      role: "Ring Bearer",
      picture: kid_2,
    },
    {
      name: "Kannon Lee",
      role: "Attendant",
      picture: kid_3,
    },
    {
      name: "Rylan Lee",
      role: "Attendant",
      picture: kid_4,
    },
  ];

  const renderMemberCell = (member: WeddingMember) => {
    return (
      <div className={styles.memberCell} key={member.name}>
        {<img src={member.picture} alt={member.name} />}
        <div className={styles.name}>{member.name}</div>
        <div>{member.role}</div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <img
          className={`${styles.header} ${styles.bridal_header}`}
          src={bridal_header}
          alt="The Bridal party"
        />
        <div className={styles.partyGrid}>
          {bridalParty.map((member) => {
            return renderMemberCell(member);
          })}
        </div>
      </div>
      <div className={styles.section}>
        <img
          className={`${styles.header} ${styles.groomsmen_header}`}
          src={groomsmen_header}
          alt="The Groomsmen party"
        />
        <div className={styles.partyGrid}>
          {groomsmenParty.map((member) => {
            return renderMemberCell(member);
          })}
        </div>
      </div>
      <div className={styles.section}>
        <img
          className={`${styles.header} ${styles.kids_header}`}
          src={kids_header}
          alt="The Kids club"
        />
        <div className={styles.partyGrid}>
          {kidsClub.map((member) => {
            return renderMemberCell(member);
          })}
        </div>
      </div>
    </div>
  );
}
