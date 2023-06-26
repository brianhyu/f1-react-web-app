import React, { useState } from 'react';
import {Box, Tab, Tabs} from '@mui/material';
import DriverStandings from './driver-standings';
import ConstructorStandings from './constructor-standings';

function Standings() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Drivers" />
        <Tab label="Constructors" />
      </Tabs>
      {!value ? <DriverStandings /> : <ConstructorStandings />}
    </Box>
  );
}

export default Standings;