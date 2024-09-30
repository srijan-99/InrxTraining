// src/components/UpgradeCard.js
import React from "react";
import "./UpgradeCard.css";

export const UpgradeCard = () => {
  return (
    <div className="upgrade-card">
      <div className="upgrade-content">
        <h2>
          Upgrade Your Plan to <span className="premium-text">Premium</span>
        </h2>
         <h2 className="upgrade-h2-2">and Get ultimate Access</h2>
        <button className="upgrade-button">Upgrade Now</button>
      </div>
    </div>
  );
};
