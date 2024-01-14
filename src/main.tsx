import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./routes/login/login";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.scss";
import Home from "./routes/home/home";

const isAuthenticated = !!localStorage.getItem("randj_valid");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: isAuthenticated ? <Home /> : <Navigate to="/" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
