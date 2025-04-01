import React from 'react';
import Menu from './menu';
import CentralDashboard from './centraldashboard';  
import './App.css';  

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh',
      width: '100vw',
      overflow: 'hidden'
    }}>
      <Menu />
      <CentralDashboard />
    </div>
  );
}

export default App;