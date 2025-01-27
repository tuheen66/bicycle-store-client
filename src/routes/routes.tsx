import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  

  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/customer",
    element: <App />,
    children: routeGenerator(userPaths),
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
