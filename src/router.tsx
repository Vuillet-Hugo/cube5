
// react-router-dom :
import { createBrowserRouter} from "react-router-dom";

// components :

// pages :

// css :
import App from "./App";
import { SignInForm } from "./components/form/signIn";
import { SignUpForm } from "./components/form/signUp";

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
    element: <App />,
    children: [
      {
        path: "signIn",
        element: <SignInForm />,
      },
      {
        path: "signUp",
        element: <SignUpForm />,
      },
    ],

  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

