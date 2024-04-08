import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// css :
import "./index.css";

// router :
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
