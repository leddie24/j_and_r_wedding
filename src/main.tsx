/* eslint-disable react-refresh/only-export-components */

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.scss";

import { NavBarWrapper } from "./components/NavBarWrapper/NavBarWrapper";

import loadable from "@loadable/component";

const isAuthenticated = !!localStorage.getItem("randj_valid");

const Home = loadable(() => import("./routes/home/Home"));
const Login = loadable(() => import("./routes/login/login"));
const OurStory = loadable(() => import("./routes/ourStory/OurStory"));
const WeddingParty = loadable(() => import("./routes/weddingParty/WeddingParty"));
const TheBigDay = loadable(() => import("./routes/theBigDay/TheBigDay"));
const TravelAndStay = loadable(() => import("./routes/travelAndStay/TravelAndStay"));
const Gallery = loadable(() => import("./routes/gallery/Gallery"));
const Registry = loadable(() => import("./routes/registry/Registry"));
const FAQ = loadable(() => import("./routes/faq/FAQ"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: isAuthenticated ? <NavBarWrapper /> : <Navigate to="/" />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/our-story",
        element: (
          <React.Suspense fallback={<div>loading</div>}>
            <OurStory />
          </React.Suspense>
        ),
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
