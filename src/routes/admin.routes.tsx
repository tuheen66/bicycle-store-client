import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateBicycle from "../pages/admin/CreateBicycle";
import GetAllOrders from "../pages/admin/GetAllOrders";
import GetAllUsers from "../pages/admin/GetAllUsers";
import UpdateBicycle from "../pages/admin/UpdateBicycle";
import AdminAllBicycles from "../pages/admin/AdminAllBicycles";


export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "All Users",
    path: "allUsers",
    element: <GetAllUsers />,
  },

  {
    name: "Create Bicycle",
    path: "create-bicycle",
    element: <CreateBicycle />,
  },
  {
    name: "All Bicycle",
    path: "allBicycle",
    element: <AdminAllBicycles />,
  },
  
  {
    
    path: "updateBicycle/:id",
    element: <UpdateBicycle />,
  },
  {
    name: "All Orders",
    path: "all-orders",
    element: <GetAllOrders />,
  },
];


