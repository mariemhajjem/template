import React, { useState } from "react";
import "./SideBar.css";
import { Layout, Menu } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;

function SideBar() {
  const [collapsed, SetCollapsed] = useState(false);
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => SetCollapsed(!collapsed)}
        >
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/Admin"> Stats</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/ManageCenter">Gestion des centres</Link>
            </Menu.Item>

            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <Link to="/ManagePh">Gestion des pharmacies</Link>
            </Menu.Item>

            <Menu.Item key="4" icon={<DesktopOutlined />}>
              <Link to="/ManageVac">Gestion des vaccins</Link>
            </Menu.Item>

            <Menu.Item key="5" icon={<DesktopOutlined />}>
              Organisation des JOV
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            ></div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default SideBar;
