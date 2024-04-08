import React from "react";
import { createRoot } from "react-dom/client";

// react-router-dom :
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";

// components :

// pages :

// css :
import "./css/index.css";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: "<HomePage />",
    children: [
      {
        path: "dashboard",
        element: "<DashBoardComponent />",
      },
    ],
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
