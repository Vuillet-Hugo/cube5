// react-router-dom :
import { createBrowserRouter } from "react-router-dom";

// pages :
import HomePage from "./components/pages/home/home.page";
import NewsPage from "./News.page";
import { FormationsPage } from "./components/formations/formations.page";
import BackOffice from "./components/pages/backoffice/backoffice.page";
import Personel from "./components/backoffice/personel/personel.component";
import Etudiant from "./components/backoffice/etudiants/etudiant.component";
import Positionnement from "./components/backoffice/positionnement/positionnement.component";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
  {
    path: "/personel",
    element: <BackOffice />,
    children: [
      {
        path: "info",
        element: <Personel />,
      },
      {
        path: "etudiant",
        element: <Etudiant />,
      },
      {
        path: "positionnement",
        element: <Positionnement />,
      },
    ],
  },
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <NewsPage />,
      },
      {
        path: "/formations",
        element: <FormationsPage />,
      },
    ],
  },
]);
