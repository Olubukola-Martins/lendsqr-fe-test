import React from 'react';
import './Sidebar.scss';
import { FiUsers, FiBriefcase, FiSettings } from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav>
        <div className="section">
          <p className="title">Customers</p>
          <ul>
            <li><MdDashboard /> Dashboard</li>
            <li className="active"><FiUsers /> Users</li>
            <li><FiUsers /> Guarantors</li>
            <li><FiBriefcase /> Loans</li>
            <li><FiBriefcase /> Decision Models</li>
            <li><FiBriefcase /> Savings</li>
            <li><FiBriefcase /> Loan Requests</li>
            <li><FiBriefcase /> Whitelist</li>
            <li><FiBriefcase /> Karma</li>
          </ul>
        </div>
        <div className="section">
          <p className="title">Businesses</p>
          <ul>
            <li><FiBriefcase /> Organization</li>
            <li><FiBriefcase /> Loan Products</li>
            <li><FiBriefcase /> Savings Products</li>
            <li><FiBriefcase /> Fees and Charges</li>
            <li><FiBriefcase /> Transactions</li>
          </ul>
        </div>
        <div className="section">
          <p className="title">Settings</p>
          <ul>
            <li><FiSettings /> Preferences</li>
            <li><FiSettings /> Fees and Pricing</li>
            <li><FiSettings /> Audit Logs</li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
