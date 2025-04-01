import React from 'react';
import { Paper, Switch, Typography, Divider } from '@mui/material';
import './centraldashboard.css';  

const CentralDashboard = () => {
  const [lteEnabled, setLteEnabled] = React.useState(true);
  const [gpsEnabled, setGpsEnabled] = React.useState(true);

  const handleToggleLTE = () => {
    setLteEnabled(!lteEnabled);
  };

  const handleToggleGPS = () => {
    setGpsEnabled(!gpsEnabled);
  };

  return (
    <div className="central-dashboard">
      <Typography variant="h4" component="h1" className="main-title">
        User Interface
      </Typography>
      
      <Paper className="section" elevation={3}>
        <Typography variant="h6" component="h2" className="section-title">
          Device Monitoring
        </Typography>
        <div className="monitoring-item">
          <Typography className="monitoring-label">Connectivity</Typography>
          <div className="status-indicator">
            <span className="status-dot online"></span>
            <Typography>Online</Typography>
          </div>
        </div>
      </Paper>

      <Paper className="section" elevation={3}>
        <Typography variant="h6" component="h2" className="section-title">
          Location
        </Typography>
        <Typography className="location-coordinates">37.7749, -122.4194</Typography>
      </Paper>

      <Paper className="section" elevation={3}>
        <Typography variant="h6" component="h2" className="section-title">
          Health
        </Typography>
        <Typography className="health-status">Good</Typography>
      </Paper>

      <Divider className="divider" />

      <Paper className="section" elevation={3}>
        <Typography variant="h6" component="h2" className="section-title">
          Device Configuration
        </Typography>
        
        <div className="config-item">
          <Typography className="config-label">LTE</Typography>
          <Divider className="config-divider" />
          <Switch 
            checked={lteEnabled} 
            onChange={handleToggleLTE}
            className="config-switch"
          />
          <Typography className="config-status">
            {lteEnabled ? 'Enabled' : 'Disabled'}
          </Typography>
        </div>

        <div className="config-item">
          <Typography className="config-label">GPS</Typography>
          <Divider className="config-divider" />
          <Switch 
            checked={gpsEnabled} 
            onChange={handleToggleGPS}
            className="config-switch"
          />
          <Typography className="config-status">
            {gpsEnabled ? 'Enabled' : 'Disabled'}
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

export default CentralDashboard;