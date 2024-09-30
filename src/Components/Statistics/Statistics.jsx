// src/components/Statistics.js
import React from "react";
import "./Statistics.css";

export const Statistics = () => {
  return (
    <div className="statistics">
      <div className="card total-assets">
        <h3>₹15,453</h3>
        <p>Total Assets</p>
      </div>
      <div className="card total-deposit">
        <h3>₹15,453</h3>
        <p>Total Deposit</p>
      </div>
      <div className="card apy">
        <h3>+8.6%</h3>
        <p>APY</p>
      </div>
    </div>
  );
};
