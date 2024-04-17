import React from "react";
import { createRoot } from "react-dom/client";


// react-router-dom :
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";

// components :
import Footer from "./components/accueil/Footer";
import Bac2 from "./components/accueil/Bac2";

// pages :

// css :
import "./css/index.css";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
    children: [
      {
        path: "dashboard",
        element: "<DashBoardComponent />",
      },
    ],
  },
  {
    path: "/Footer",
    element: "<Footer />",
    children: [
      {
        path: "Bac2",
        element: "<Bac2 />"
      }
    ]
  },

  {
    path: "/",
    element: "<AuthentificationPage />",
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
