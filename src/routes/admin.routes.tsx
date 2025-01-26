import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateBicycle from "../pages/admin/CreateBicycle";

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
];


