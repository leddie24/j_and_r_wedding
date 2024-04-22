import loadable from "@loadable/component";

export const Home = loadable(() => import("./routes/home/Home"));
export const Login = loadable(() => import("./routes/login/login"));
export const OurStory = loadable(() => import("./routes/ourStory/OurStory"));
export const WeddingParty = loadable(() => import("./routes/weddingParty/WeddingParty"));
export const TheBigDay = loadable(() => import("./routes/theBigDay/TheBigDay"));
export const TravelAndStay = loadable(() => import("./routes/travelAndStay/TravelAndStay"));
export const Gallery = loadable(() => import("./routes/gallery/Gallery"));
export const Registry = loadable(() => import("./routes/registry/Registry"));
export const FAQ = loadable(() => import("./routes/faq/FAQ"));
