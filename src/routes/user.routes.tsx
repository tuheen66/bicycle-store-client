import CreateOrder from "../pages/user/CreateOrder";
import UserDashboard from "../pages/user/UserDashboard";

export const userPaths = [
  {
    name: "User Dashboard",
    path: "user-dashboard",
    element: <UserDashboard />,
  },
  {
    name: "Create Order",
    path: "create-order",
    element: <CreateOrder />,
  },
];
