import React from 'react';
import './App.css';
import vegrowIcon from './vegrow.png'; // Import the Vegrow icon

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={vegrowIcon} alt="Vegrow Icon" className="navbar-icon" />
        <span className="navbar-text">PURCHASE ORDER TRAIL</span>
      </div>
    </nav>
  );
};

export default Navbar;
