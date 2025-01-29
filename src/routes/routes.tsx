import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import Register from "../pages/Register/Register";
import AllBicycles from "../pages/allBicycles/AllBicycles";
import Contacts from "../pages/contacts/Contacts";
import SingleBicycle from "../pages/singleBicycle/SingleBicycle";
import About from "../pages/about/About";

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
        path: "/",
        element: <Home />,
      },
      {
        path: "all-bicycles",
        element: <AllBicycles />,
      },
      {
        path: "single-bicycles/:id",
        element: <SingleBicycle />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contacts />,
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
