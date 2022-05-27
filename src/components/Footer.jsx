import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 375 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
        <BottomNavigationAction label="Admin" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}