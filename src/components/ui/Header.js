import React, { useState } from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { useScrollTrigger } from '@mui/material';
import { Box } from '@mui/material';
import { Tabs, Tab } from '@mui/material';
import { Button } from '@mui/material';

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
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value)
  }


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
              alt="Company Logos"
              src={logo}
            ></Box>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              sx={{
                marginLeft: "auto",
              }}
            >
              <Tab 
                sx={(theme) => ({
                  ...theme.typography.tab,
                  minWidth: 10,
                  marginLeft: "25px",
                })} 
                label="Home"
              />
              <Tab 
                sx={(theme) => ({
                  ...theme.typography.tab,
                  minWidth: 10,
                  marginLeft: "25px",
                })} 
                label="Services"
              />
              <Tab 
                sx={(theme) => ({
                  ...theme.typography.tab,
                  minWidth: 10,
                  marginLeft: "25px",
                })} 
                label="The Revolution"
              />
              <Tab 
                sx={(theme) => ({
                  ...theme.typography.tab,
                  minWidth: 10,
                  marginLeft: "25px",
                })} 
                label="About Us"
              />
              <Tab 
                sx={(theme) => ({
                  ...theme.typography.tab,
                  minWidth: 10,
                  marginLeft: "25px",
                })} 
                label="Contact Us"
              />
            </Tabs>
            <Button 
              variant="contained" 
              color="secondary"
              sx={(theme) => ({
                ...theme.typography.estimate,
                borderRadius: "50px",
                marginLeft: "50px",
                marginRight: "25px",
                height: "45px",
              })}
            >
              Free Estimate
            </Button>
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