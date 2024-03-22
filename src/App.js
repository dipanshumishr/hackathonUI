import React, { useState } from 'react';
import './App.css';


const Navbar = ({ onChangeTab }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    onChangeTab(tabIndex);
  };

  return (
    <div className="navbar">
      <div
        className={`tab ${activeTab === 0 ? 'active' : ''}`}
        onClick={() => handleTabClick(0)}
      >
        Tab 1
      </div>
      <div
        className={`tab ${activeTab === 1 ? 'active' : ''}`}
        onClick={() => handleTabClick(1)}
      >
        Tab 2
      </div>
      <div
        className={`tab ${activeTab === 2 ? 'active' : ''}`}
        onClick={() => handleTabClick(2)}
      >
        Tab 3
      </div>
      {/* Add more tabs as needed */}
    </div>
  );
};

export default Navbar;
