import React from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { useScrollTrigger } from '@mui/material';
import { Box } from '@mui/material';
import { Tabs, Tab } from '@mui/material';

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
  const { children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Box
              component="img"
              sx={{
                height: "7em",
              }}
              alt="Company Logo"
              src={logo}
            ></Box>
            <Tabs
              sx={{
                marginLeft: "auto",
              }}
            >
              <Tab 
                sx={{
                  minWidth: 10,
                  marginLeft: "25px",
                }} 
                label="Home"
              />
              <Tab label="Services"/>
              <Tab label="The Revolution"/>
              <Tab label="About Us"/>
              <Tab label="Contact Us"/>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar
        sx={{
          marginBottom: "3em",
        }}
      />
    </>
  )
}

export default Header