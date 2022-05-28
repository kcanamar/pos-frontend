import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Paper from '@mui/material/Paper'
import { Link } from "react-router-dom"

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const handleChange = (evt, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: 375 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={8}>
        <BottomNavigation
          value={value}
          onChange={(evt, newValue) => { handleChange(evt, newValue) }}
        >
          <Link to={"/"}>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          </Link>
          <Link to={"/menu"}>
            <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
          </Link>
          <Link to={"/admin"}>
            <BottomNavigationAction label="Admin" icon={<PersonIcon />} />
          </Link>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}