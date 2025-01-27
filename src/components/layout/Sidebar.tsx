import { Layout, Menu } from "antd";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { userPaths } from "../../routes/user.routes";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { logout, useCurrentUser } from "../../redux/features/auth/authSlice";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "customer",
};

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(useCurrentUser);

  let sidebarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.USER:
      sidebarItems = sidebarGenerator(userPaths, userRole.USER);
      break;
    default:
      break;
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="0" className="h-[100%]">
      <div className=" text-center text-2xl font-bold my-4 text-white">
        <h1>Bicycle Store</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
      <div className="border-b-2 mx-2 border-gray-700"></div>
      <div className="  mx-2  ">
        <Link to="/login">
          <button className="btn btn-sm bg-[#e67e22] py-1 rounded-lg w-full border-none text-[#001529] text-md font-semibold mt-6 hover:bg-[#d35400] ">
            Login
          </button>
        </Link>
        <Link to="/login">
          <button
            onClick={handleLogout}
            className="btn btn-sm bg-[#e67e22] py-1 rounded-lg w-full border-none text-[#001529] text-md font-semibold mt-6 hover:bg-[#d35400] "
          >
            Logout
          </button>
        </Link>
        <Link to="/home">
          <button className=" btn btn-sm bg-[#e67e22] py-1 rounded-lg w-full border-none text-[#001529] text-md font-semibold mt-6 hover:bg-[#d35400] ">
            Home
          </button>
        </Link>
      </div>
    </Sider>
  );
};

export default Sidebar;
