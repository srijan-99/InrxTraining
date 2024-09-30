import React, { useState,useEffect } from "react";
import "./App.css";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Navbar } from "./Components/Navbar/Navbar";
import { UpgradeCard } from './Components/UpgradeCard/UpgradeCard';
import { Statistics } from './Components/Statistics/Statistics';
import { BalanceCard } from './Components/BalanceCard/BalanceCard';
import { BuySell } from "./Components/Buy_Sell/BuySell";
import Chart from './Components/Chart/Chart.jsx';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChange, setIsChange] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setIsChange(prev => !prev);
    console.log(isChange);
  }
  useEffect(() => {
    console.log(isChange);
  }, [isChange]);


  return (
    // in this we are using static plus dynamic class
    <div className={`dashboard ${isChange ? "dark" : "light"}`}>
      <div className={`hamburger-menu ${isSidebarOpen ? "open" : ""}`} onClick={toggleSidebar}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </div>
      <Sidebar
  isSidebarOpen={isSidebarOpen}
  toggleSidebar={toggleSidebar}
  toggleTheme={toggleTheme}
  isDarkMode={isChange} // Pass the dark mode state
/>

      <div className="main-dashboard">
        <Navbar />
        <div className="dashboard-content">
          <div className="dashboard-content-1">
            <UpgradeCard />
            <Statistics />
            <Chart />
          </div>
          <div className="dashboard-content-2">
            <BalanceCard />
            <BuySell />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
