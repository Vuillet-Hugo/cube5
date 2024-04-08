import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserProvider } from "./providers/data.provider.tsx";

// router :
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <App />
      {/* <RouterProvider router={router} /> */}
    </UserProvider>
  </React.StrictMode>
);
