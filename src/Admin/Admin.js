import React from "react";
import { Progress } from "antd";

import SideBar from "../SideBar/SideBar";

function Admin() {
  return (
    <div>
      <SideBar />
      <Progress type="circle" percent={75} />
      <Progress type="circle" percent={70} status="exception" />
      <Progress type="circle" percent={100} />
    </div>
  );
}

export default Admin;
