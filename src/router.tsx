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
import { SignUpForm } from "./components/form/signUp";


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
        path: "etudiant",
        element: <Etudiant />,
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
