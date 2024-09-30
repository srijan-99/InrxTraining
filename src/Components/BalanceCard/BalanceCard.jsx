// src/components/BalanceCard.js
import React from "react";
import "./BalanceCard.css";
import { MdArrowOutward } from "react-icons/md";

export const BalanceCard = () => {
  return (
    <div className="balance-card">

  
      <div className="profile-info">
        
        <img src="../../../public/pratham.png"/>


        <div className="balance-info">
          <h3>Total Balance</h3>
          <h2>₹15,453.058</h2>
          <p className="growth">+12.34% </p>
          
        </div>
      </div>
    </div>
  );
};
