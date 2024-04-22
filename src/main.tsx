import React from "react";
import ReactDOM from "react-dom/client";

import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.scss";

import { NavBarWrapper } from "./components/NavBarWrapper/NavBarWrapper";

import {
  FAQ,
  Gallery,
  Home,
  Login,
  OurStory,
  Registry,
  TheBigDay,
  TravelAndStay,
  WeddingParty,
} from "./routes";

const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <NavBarWrapper />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/our-story",
        element: <OurStory />,
      },
      {
        path: "/wedding-party",
        element: <WeddingParty />,
      },
      {
        path: "/the-big-day",
        element: <TheBigDay />,
      },
      {
        path: "/travel",
        element: <TravelAndStay />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/registry",
        element: <Registry />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
