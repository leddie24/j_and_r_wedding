import styles from "./TravelAndStay.module.scss";
import nearby_airports from "./assets/nearby_airports.jpg";
import residence_inn from "./assets/residence_inn.jpg";
import residence_inn_sketch from "./assets/residence_inn_sketch.jpg";
import marriott from "./assets/marriott.jpg";
import marriott_sketch from "./assets/marriott_sketch.jpg";
import sonesta from "./assets/sonesta.jpg";
import sonesta_sketch from "./assets/sonesta_sketch.jpg";
import hyatt from "./assets/hyatt.jpg";
import hyatt_sketch from "./assets/hyatt_sketch.jpg";
import extended_stay from "./assets/extended_stay.jpg";
import extended_stay_sketch from "./assets/extended_stay_sketch.jpg";
import { PhBeerSteinBold } from "./assets/beer";
import { IconParkOutlineRollerskates } from "./assets/skate";
import { MaterialSymbolsMuseumOutline } from "./assets/museum";
import { MdiShoppingOutline } from "./assets/shopping";
import { GameIconsForkKnifeSpoon } from "./assets/dining";
import { IonBinoculars } from "./assets/binoculars";
import { PhWineBold } from "./assets/wine";
import { LaGlassMartiniAlt } from "./assets/martini";
import { LucideCoffee } from "./assets/coffee";
import { GrommetIconsAttraction } from "./assets/attraction";
import { MapZoo } from "./assets/zoo";

interface IAccomodation {
  image: string;
  imageSketch: string;
  name: string;
  address: string;
  eta: number;
  roomTypes: string;
  note?: string;
}

interface IAttraction {
  icon: JSX.Element[];
  name: string;
}

interface ICityThings {
  name: string;
  things: IAttraction[];
}

export default function WeddingParty() {
  const mainAccomodations: IAccomodation[] = [
    {
      image: residence_inn,
      imageSketch: residence_inn_sketch,
      name: "The Residence Inn by Marriott",
      address: "1071 Market Pl, San Ramon, CA 94583",
      eta: 5,
      roomTypes: "Studio suite & 2 bedroom suites",
      note: "*Click on the hotel block button below for discounted rates. If any issues with booking, please email me with your name, room type, and booking date at cholinhares@gmail.com",
    },
    {
      image: marriott,
      imageSketch: marriott_sketch,
      name: "San Ramon Marriott",
      address: "2600 Bishop Dr, San Ramon, CA 94583",
      eta: 7,
      roomTypes: "King guest room & 2 doubles guest room",
      note: "*We do not have hotel block at this hotel",
    },
  ];

  const otherAccomodations: IAccomodation[] = [
    {
      image: sonesta,
      imageSketch: sonesta_sketch,
      name: "Sonesta Select San Ramon",
      address: "18090 San Ramon Valley Blvd. San Ramon, CA 94583",
      eta: 8,
      roomTypes: "Guest rooms & One bedroom suites",
    },
    {
      image: hyatt,
      imageSketch: hyatt_sketch,
      name: "Hyatt House San Ramon",
      address: "2323 San Ramon Valley Blvd. San Ramon, CA 94583",
      eta: 9,
      roomTypes: "Studio king & One bedroom suites",
    },
    {
      image: extended_stay,
      imageSketch: extended_stay_sketch,
      name: "Extended Stay America",
      address: "18000 San Ramon Valley Blvd. San Ramon, CA 94583",
      eta: 8,
      roomTypes: "Studio & Deluxe suites",
    },
  ];

  const thingToDo: ICityThings[] = [
    {
      name: "San Ramon",
      things: [
        {
          icon: [<MdiShoppingOutline />, <GameIconsForkKnifeSpoon />],
          name: "City Center Bishop Ranch",
        },

        {
          icon: [<MaterialSymbolsMuseumOutline />],
          name: "Blackhawk Museum",
        },
        {
          icon: [<IconParkOutlineRollerskates />],
          name: "The Golden Skate",
        },
        {
          icon: [<PhBeerSteinBold />],
          name: "Canyon Lake Brewery",
        },
        {
          icon: [<GameIconsForkKnifeSpoon />],
          name: "One House Bistro",
        },
        {
          icon: [<IonBinoculars />],
          name: "Las Trampas Regional Wilderness Park",
        },
      ],
    },
    {
      name: "San Ramon Surrounding",
      things: [
        {
          icon: [<MdiShoppingOutline />],
          name: "San Francisco Premium Outlets in Livermore",
        },

        {
          icon: [<PhWineBold />],
          name: "Dante Robere Vineyards in Livermore",
        },
        {
          icon: [<IonBinoculars />],
          name: "The Gardens at Heather Farm in Walnut Creek",
        },
        {
          icon: [<PhWineBold />],
          name: "Elliston Vineyards in Sunol",
        },
      ],
    },
    {
      name: "Oakland",
      things: [
        {
          icon: [<MapZoo />],
          name: "Oakland Zoo",
        },

        {
          icon: [<MaterialSymbolsMuseumOutline />],
          name: "Chabot Space & Science Center",
        },
        {
          icon: [<GrommetIconsAttraction />],
          name: "Children's Fairyland",
        },
        {
          icon: [<IonBinoculars />],
          name: "Lake Merritt",
        },
        {
          icon: [<GameIconsForkKnifeSpoon />],
          name: "ACRE Kitchen and Bar",
        },
        {
          icon: [<LaGlassMartiniAlt />],
          name: "The Cat House",
        },
      ],
    },
    {
      name: "San Francisco",
      things: [
        {
          icon: [<LaGlassMartiniAlt />, <GameIconsForkKnifeSpoon />],
          name: "The Buena Vista",
        },

        {
          icon: [<IonBinoculars />],
          name: "Dolores Park",
        },
        {
          icon: [<IonBinoculars />],
          name: "Salesforce Park",
        },
        {
          icon: [<GameIconsForkKnifeSpoon />],
          name: "Bella Trattoria",
        },
        {
          icon: [<IonBinoculars />],
          name: "Presidio Tunnel Tops",
        },
        {
          icon: [<IonBinoculars />],
          name: "Fisherman's Wharf",
        },
      ],
    },
    {
      name: "San Jose",
      things: [
        {
          icon: [<LaGlassMartiniAlt />, <GameIconsForkKnifeSpoon />],
          name: "San Pedro Square Market",
        },
        {
          icon: [<MdiShoppingOutline />, <LaGlassMartiniAlt />, <GameIconsForkKnifeSpoon />],
          name: "Santana Row",
        },
        {
          icon: [<MaterialSymbolsMuseumOutline />],
          name: "The Tech Interactive Museum",
        },
        {
          icon: [<IonBinoculars />],
          name: "Cathedral Basilica of Saint Joseph",
        },
        {
          icon: [<LucideCoffee />],
          name: "Voyager Craft Coffee",
        },
        {
          icon: [<GrommetIconsAttraction />],
          name: "Winchester Mystery House",
        },
      ],
    },
  ];

  const renderAccomodation = (accomodation: IAccomodation) => {
    return (
      <div className={styles.accomodation}>
        <div className={styles.accomodationImageContainer}>
          <img className={styles.image} src={accomodation.image} alt={accomodation.name} />
          <img
            className={styles.imageSketch}
            src={accomodation.imageSketch}
            alt={accomodation.name}
          />
        </div>
        <div className={styles.name}>{accomodation.name}</div>
        <div>{accomodation.address}</div>
        <div className={styles.eta}>{accomodation.eta} min drive to venue</div>
        <div>Room types: {accomodation.roomTypes}</div>
        {accomodation.note && <div className={styles.note}>{accomodation.note}</div>}
      </div>
    );
  };

  return (
    <>
      <section className={styles.nearbyAirports}>
        <h2>Nearby Airports</h2>
        <img src={nearby_airports} alt="nearby airports" />
      </section>
      <section className={styles.mainAccomodations}>
        <h2>Accomodations</h2>
        <div className={styles.accomodationContainer}>
          {mainAccomodations.map((accomodation) => {
            return renderAccomodation(accomodation);
          })}
        </div>
      </section>
      <section className={styles.otherAccomodations}>
        <h2>Other Nearby Hotels</h2>
        <div className={styles.accomodationContainer}>
          {otherAccomodations.map((accomodation) => {
            return renderAccomodation(accomodation);
          })}
        </div>
      </section>
      <section className={styles.thingsToDo}>
        <h2>Things to Do</h2>
        <div className={styles.toDoContainer}>
          {thingToDo.map((city) => {
            return (
              <div className={styles.toDo}>
                <h3>{city.name}</h3>
                <ul>
                  {city.things.map((thing) => {
                    return (
                      <li>
                        <div>
                          {thing.icon.map((icon) => {
                            return icon;
                          })}
                        </div>
                        <div>{thing.name}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
