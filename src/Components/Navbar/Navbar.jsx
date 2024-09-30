import React from "react";
import "./Navbar.css";


export const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        Welcome Back, <span className="username">Sally!</span>
      </h1>

      <div className="navbar-right">
        <div className="search-box">
          <div className='search-box_1'>
            <img className='search' src='../../../public/Group 14.png' />
            <p>Search</p>
          </div>

          <div>
            <img className='group' src='../../../public/Group 1.png' />
          </div>
        </div>

        <div className='search-box-2'>
          <img className='notification' src='../../../public/Group 1046.png' />
          <img className='profile-pic' src='../../../public/Ellipse 1.png' />
          <img className='dot' src='../../../public/more 2.png' />
        </div>
      </div>
    </div>
  );
};
