// react-router-dom :
import { createBrowserRouter } from "react-router-dom";

// pages :
import HomePage from "./components/pages/home/home.page";
import NewsPage from "./News.page";
import { FormationsPage } from "./components/formations/formations.page";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>Not Found</h1>,
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
