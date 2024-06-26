// react-router-dom :
import { createBrowserRouter } from "react-router-dom";

// components :

// pages :
import HomePage from "./components/pages/home/home.page";
import NewsPage from "./News.page";
import { FormationsPage } from "./components/formations/formations.page";
import BackOffice from "./components/pages/backoffice/backoffice.page";
import Personel from "./components/backoffice/personel/personel.component";
import Etudiant from "./components/backoffice/etudiants/etudiant.component";
import GestionContent from "./components/backoffice/content/content.component";
import Positionnement from "./components/backoffice/positionnement/positionnement.component";
import Parametres from "./components/backoffice/parametres/parametre.component"

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
        path: "",
        element: <Personel />,
      },
      {
        path: "gestion",
        element: <GestionContent />,
      },
      {
        path: "etudiant",
        element: <Etudiant />,
      },
      {
        path: "positionnement",
        element: <Positionnement />,
      },
      {
        path: "parametre",
        element: <Parametres />,
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
