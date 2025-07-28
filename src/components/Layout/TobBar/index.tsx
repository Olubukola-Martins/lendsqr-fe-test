import React from 'react';
import './TobBar.scss';
import { FiSearch, FiBell } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

const TopBar: React.FC = () => {
  return (
    <header className="topbar">
      <div className="left">
        <div className="logo">lendsqr</div>
        <select className="org-switcher">
          <option>Switch Organization</option>
        </select>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for anything" />
        <FiSearch className="icon" />
      </div>
      <div className="right">
        <FiBell className="icon" />
        <FaUserCircle className="icon" />
        <div className="user">
          <img src="/assets/avatar.jpg" alt="Adedeji" />
          <span>Adedeji</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
