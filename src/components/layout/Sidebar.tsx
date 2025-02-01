import { Layout, Menu } from "antd";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { userPaths } from "../../routes/user.routes";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/features/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "customer",
};

const Sidebar = () => {
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

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      {/* <div className="demo-logo-vertical" /> */}
      <div className="flex justify-center ">
        <h1 className="text-3xl font-semibold text-white my-4"> Bicycle Hub</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
      <div className="border-b-2 border-gray-600 mx-2 my-4 "></div>
      <div className="mx-2 mt-4 ">
        <Link to="/">
          <button className=" text-white bg-[#1677FF] w-full py-2 rounded-lg mb-4">
            Home
          </button>
        </Link>
      </div>
    </Sider>
  );
};

export default Sidebar;
