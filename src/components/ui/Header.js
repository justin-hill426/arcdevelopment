import React, { useState, useEffect} from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { useScrollTrigger } from '@mui/material';
import { Box } from '@mui/material';
import { Tabs, Tab } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';

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
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)

  const handleChange = (e, value) => {
    setValue(value)
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpen(false)
  }

  useEffect(() => {
    if(window.location.pathname === "/" && value !== 0) {
      setValue(0)
    } else if(window.location.pathname === "/services" && value !== 1) {
      setValue(1)
    } else if(window.location.pathname === "/revolution" && value !== 2) {
      setValue(2)
    } else if(window.location.pathname === "/about" && value !== 3) {
      setValue(3)
    } else if(window.location.pathname === "/contact" && value !== 4) {
      setValue(4)
    } else if(window.location.pathname === "/estimate" && value !== 5) {
      setValue(5)
    }
  }, [value]);


  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Button 
              component={Link} 
              to="/"
              sx={{
                padding: 0,
                "&:hover": {
                  backgroundColor: "transparent"
                }
              }}
              disableRipple
              onClick={() => setValue(0)}
            >
              <Box
                component="img"
                sx={{
                  height: "8em",
                }}
                alt="Company Logos"
                src={logo}
              ></Box>
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor= "white"
              sx={{
                marginLeft: "auto",
              }}
            >
              <Tab 
                sx={(theme) => ({
                  ...theme.typography.tab,
                  minWidth: 10,
                  marginLeft: "25px",
                  opacity: value === 0 ? 1 : 0.7,
                })} 
                component={Link}
                to="/"
                label="Home"
              />
              <Tab 
                sx={(theme) => ({
                  ...theme.typography.tab,
                  minWidth: 10,
                  marginLeft: "25px",
                  opacity: value === 1 ? 1 : 0.7,
                })} 
                component={Link}
                to="/services"
                label="Services"
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={(event) => handleClick(event)}
              />
              <Tab 
                sx={(theme) => ({
                  ...theme.typography.tab,
                  minWidth: 10,
                  marginLeft: "25px",
                  opacity: value === 2 ? 1 : 0.7,
                })}
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <Tab 
                sx={(theme) => ({
                  ...theme.typography.tab,
                  minWidth: 10,
                  marginLeft: "25px",
                  opacity: value === 3 ? 1 : 0.7,
                })} 
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab 
                sx={(theme) => ({
                  ...theme.typography.tab,
                  minWidth: 10,
                  marginLeft: "25px",
                  opacity: value === 4 ? 1 : 0.7,
                })} 
                component={Link}
                to="/contact"
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
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={(theme) => ({
                "& .MuiMenu-paper": {
                  backgroundColor:theme.palette.common.blue,
                  color: 'white'
                }
              })}
              MenuListProps={{onMouseLeave: handleClose}}
            >
              <MenuItem 
                onClick={() => {handleClose(); setValue(1)}} 
                component={Link} 
                sx={(theme) => ({
                  ...theme.typography.tab,
                  opacity: 0.7,
                  "&:hover": {
                    opacity: 1
                  }
                })}
                to="/customsoftware"
              >
                Custom Software Development
              </MenuItem>
              <MenuItem 
                onClick={() => {handleClose(); setValue(1)}} 
                component={Link} 
                sx={(theme) => ({
                  ...theme.typography.tab,
                  opacity: 0.7,
                  "&:hover": {
                    opacity: 1
                  }
                })}
                to="/mobileapps"
              >
                Mobile App Development
              </MenuItem>
              <MenuItem 
                onClick={() => {handleClose(); setValue(1)}} 
                component={Link} 
                sx={(theme) => ({
                  ...theme.typography.tab,
                  opacity: 0.7,
                  "&:hover": {
                    opacity: 1
                  }
                })}
                to="/websitedevelopment"
              >
                Website Development
              </MenuItem>
            </Menu>
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