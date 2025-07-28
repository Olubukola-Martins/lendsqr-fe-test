
import React from 'react';
import './DashboardLayout.scss';
import { Outlet } from 'react-router-dom';
import TopBar from '../../components/Layout/TobBar';
import Sidebar from '../../components/Layout/SideBar';

const DashboardLayout: React.FC = () => {
  return (
    <div className="dashboard-layout">
      <TopBar />
      <div className="layout-body">
        <Sidebar />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
