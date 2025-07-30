import React, { useState } from "react";
import "./DashboardLayout.scss";
import { Outlet } from "react-router-dom";
import TopBar from "../../components/Layout/TobBar";
import Sidebar from "../../components/Layout/SideBar";

const DashboardLayout: React.FC = () => {
  const [hideSideBar, setHideSideBar] = useState(true);

  return (
    <div className="dashboard-layout">
      <TopBar hideSideBar={hideSideBar} setHideSideBar={setHideSideBar} />
      <div className="layout-body">
        <Sidebar hide={hideSideBar} />
        <main className={`content ${!hideSideBar ? "overlay-active" : ""}`}>
          {!hideSideBar && <div className="overlay" onClick={() => setHideSideBar(true)} />}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
