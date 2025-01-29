import CreateOrder from "../pages/user/CustomerOrders";
import UserDashboard from "../pages/user/UserDashboard";

export const userPaths = [
  {
    name: "User Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "My Orders",
    path: "create-order",
    element: <CreateOrder />,
  },
];
