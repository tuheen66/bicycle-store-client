import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateBicycle from "../pages/admin/CreateBicycle";
import GetAllOrders from "../pages/admin/GetAllOrders";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Create Bicycle",
    path: "create-bicycle",
    element: <CreateBicycle />,
  },
  {
    name: "All Orders",
    path: "all-orders",
    element: <GetAllOrders />,
  },
];


