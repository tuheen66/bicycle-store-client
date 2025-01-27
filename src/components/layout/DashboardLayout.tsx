import { Layout } from "antd";
const { Header, Content } = Layout;

import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <Layout className="h-screen">
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }}></Header>
        <Content style={{ margin: "24px 16px 10px" }}>
          <div className="border-2 border-red-200 "
            style={{
              padding: 24,
              minHeight:360
              
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
