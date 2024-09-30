import React from "react";
import "./Sidebar.css";

export const Sidebar = ({ isSidebarOpen, toggleSidebar, toggleTheme, isDarkMode }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "show" : ""} ${isDarkMode ? "dark" : "light"}`}>
      <div className="sidebar-top">
        <div className="logo-placeholder">
          <img src='../../../public/Group 42.png' alt="logo" />
        </div>
        <ul className="sidebar-options">
          <li><a href="/overview"><img src='../../../public/Overview.png' alt="overview" /> Overview</a></li>
          <li><a href="/assets"><img src='../../../public/Asstes.png' alt="assets" /> Assets</a></li>
          <li><a href="/activity"><img src='../../../public/Activity.png' alt="activity" /> Activity</a></li>
          <li><a href="/deposit"><img src='../../../public/Deposite.png' alt="deposit" /> Deposit</a></li>
          <li><a href="/withdraw"><img src='../../../public/Deposite (1).png' alt="withdraw" /> Withdraw</a></li>
          <li><a href="/earn"><img src='../../../public/Setting.png' alt="earn" /> Earn</a></li>
        </ul>
      </div>
      <div className="sidebar-bottom">
        <ul>
          <li><a href="/support"><img src='../../../public/Setting (3).png' alt="support" /> Support</a></li>
          <li><a href="/settings"><img src='../../../public/Setting (4).png' alt="settings" /> Settings</a></li>
          <li>
            <button onClick={toggleTheme}>Toggle Dark Mode</button>
          </li>
          <li><a href="/logout"><img src='../../../public/Setting (4).png' alt="logout" /> Logout</a></li>
        </ul>
      </div>
    </div>
  );
};
