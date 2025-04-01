import React from 'react';
import { Paper, Switch, FormControlLabel, Typography, Box, TextField, Grid, styled } from '@mui/material';

const StyledPaper = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
});

const StyledTypography = styled(Typography)({
  fontSize: '1rem',
  color: '#333',
  fontWeight: 'bold'
});

const Dashboard = () => {
  const [isLTEEnabled, setLTEEnabled] = React.useState(true);
  const [isGPSEnabled, setGPSEnabled] = React.useState(true);

  return (
    <Box sx={{ flexGrow: 1, p: 3, maxWidth: 900, margin: 'auto' }}>
      <StyledTypography variant="h6" sx={{ mb: 2 }}>User Interface</StyledTypography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledPaper>
            <StyledTypography variant="subtitle1" sx={{ mb: 1 }}>Device Monitoring</StyledTypography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <StyledTypography>Connectivity</StyledTypography>
              <StyledTypography color="green">Online</StyledTypography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <StyledTypography>Location</StyledTypography>
              <StyledTypography>37.7749, -122.4194</StyledTypography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <StyledTypography>Health</StyledTypography>
              <StyledTypography>Good</StyledTypography>
            </Box>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledPaper>
            <StyledTypography variant="subtitle1" sx={{ mb: 1 }}>Device Configuration</StyledTypography>
            <FormControlLabel
              control={<Switch checked={isLTEEnabled} onChange={() => setLTEEnabled(!isLTEEnabled)} />}
              label={<StyledTypography>LTE</StyledTypography>}
            />
            <FormControlLabel
              control={<Switch checked={isGPSEnabled} onChange={() => setGPSEnabled(!isGPSEnabled)} />}
              label={<StyledTypography>GPS</StyledTypography>}
            />
          </StyledPaper>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <StyledPaper>
            <TextField fullWidth label="Username" variant="outlined" />
            <TextField fullWidth label="Password" type="password" variant="outlined" sx={{ mt: 2 }} />
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

