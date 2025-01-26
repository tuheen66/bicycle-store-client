import { Layout, Menu } from "antd";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { userPaths } from "../../routes/user.routes";
import { Link } from "react-router-dom";
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "customer",
};

const Sidebar = () => {
  const role = "admin";
  let sidebarItems;

  switch (role) {
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
      <div className=" text-center text-2xl font-bold my-4 text-white">
        <h1>Bicycle Store</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
      <div className="justify-center items-center flex mt-4">
        <Link to="/main/login">
          <button className="btn btn-primary">Login</button>
        </Link>
      </div>
    </Sider>
  );
};

export default Sidebar;
