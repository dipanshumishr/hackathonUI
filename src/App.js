import React, { useState } from 'react';
import './App.css';
import vegrowIcon from './vegrow.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={vegrowIcon} alt="Vegrow Icon" className="navbar-icon" />
        <span className="navbar-text">PO TRACE</span>
      </div>
    </nav>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('summary');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-container">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === 'summary' ? 'active' : ''}`}
          onClick={() => handleTabClick('summary')}
        >
          Summary
        </button>
        <button
          className={`tab-button ${activeTab === 'saleOrders' ? 'active' : ''}`}
          onClick={() => handleTabClick('saleOrders')}
        >
          Sale Orders
        </button>
        <button
          className={`tab-button ${activeTab === 'b2rDeliveries' ? 'active' : ''}`}
          onClick={() => handleTabClick('b2rDeliveries')}
        >
          B2R Deliveries
        </button>
        <button
          className={`tab-button ${activeTab === 'currentInventory' ? 'active' : ''}`}
          onClick={() => handleTabClick('currentInventory')}
        >
          Current Inventory
        </button>
        <button
          className={`tab-button ${activeTab === 'inventoryAdjustments' ? 'active' : ''}`}
          onClick={() => handleTabClick('inventoryAdjustments')}
        >
          Inventory Adjustments
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'summary' && <Summary />}
        {activeTab === 'saleOrders' && <SaleOrders />}
        {activeTab === 'b2rDeliveries' && <B2RDeliveries />}
        {activeTab === 'currentInventory' && <CurrentInventory />}
        {activeTab === 'inventoryAdjustments' && <InventoryAdjustments />}
      </div>
    </div>
  );
};

const Summary = () => {
  return <div>Summary content</div>;
};

const SaleOrders = () => {
  return <div>Sale Orders</div>;
};

const B2RDeliveries = () => {
  return <div>B2R Deliveries</div>;
};

const CurrentInventory = () => {
  return <div>Current Inventory</div>;
};

const InventoryAdjustments = () => {
  return <div>Inventory Adjustments</div>;
};

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="purchase-order">Purchase order(PO)</div>
      <div className="search-container">
        <input type="text" placeholder="Enter PO ID" className="search-input" />
        <button className="search-button">&#10003;</button>
        <button className="clear-button">&#10005;</button>
      </div>
      <Tabs />
    </div>
  );
};

export default App;