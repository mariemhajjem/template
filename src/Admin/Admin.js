// import { Progress } from "antd";
import React from "react";
import SideBar from "../SideBar/SideBar";
import { Layout } from "antd";
const { Header, Content, Sider, Footer } = Layout;

function Admin() {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        {/* <SideBar />
      <Progress type="circle" percent={75} />
      <Progress type="circle" percent={70} status="exception" />
      <Progress type="circle" percent={100} /> */}
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            ></div>
          </Content>
        </Layout>{" "}
      </Layout>
    </div>
  );
}

export default Admin;
