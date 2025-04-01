import React from 'react';
import './menu.css';  
import logo from '/src/logo.png';
const Menu = () => {
  return (
    <div className="menu">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="menu-logo" />
      </div>
      <h1 className="menu-title">Dashboard</h1>
      <ul className="menu-list">
        <li>Central DashBoard</li>
        <li>Data Usage</li>
        <li>GPS</li>
        <li>System Config</li>
        <li>VoIP Call</li>
        <li>Firewall</li>
        <li>Log</li>
        <li>System Health</li>
      </ul>
    </div>
  );
}

export default Menu;

