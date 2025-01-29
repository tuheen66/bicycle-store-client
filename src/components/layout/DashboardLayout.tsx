import { Layout } from "antd";
const { Header, Content } = Layout;

import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <Layout className="min-h-screen">
      <Sidebar />
      <Layout>
        <Header></Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
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
