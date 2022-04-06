import React, { useState, useEffect} from 'react'
import { AppBar, autocompleteClasses, IconButton } from '@mui/material'
import { Toolbar } from '@mui/material'
import { useScrollTrigger } from '@mui/material';
import { Box } from '@mui/material';
import { Tabs, Tab } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import { SwipeableDrawer } from '@mui/material';
import { List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
  const theme = useTheme()
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false)
    setSelectedIndex(i);
    console.log(`Selected index is now ${i}`)
    console.log(`Value index is now ${value}`)
  }

  const menuOptions = [
    {name: 'Services', link: '/services'},
    {name: 'Custom Software Development', link: '/customsoftware'},
    {name: 'Mobile App Develpment', link: '/mobileapps'},
    {name: 'Website Development', link: '/websites'},
  ]

  useEffect(() => {
    switch(window.location.pathname) {
      case "/":
        if(value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if(value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if(value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if(value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if(value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
        case "/revolution":
          if(value !== 2) {
            setValue(2);
          }
          break;
        case "/about":
          if(value !== 3) {
            setValue(3);
          }
          break;
        case "/contact":
          if(value !== 4) {
            setValue(4);
          }
          break;
        case "/estimate":
          if(value !== 5) {
            setValue(5);
          }
          break;
      default:
        break;
    }
  }, [value]);

  const tabs = (
    <>
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
        open={openMenu}
        onClose={handleClose}
        sx={(theme) => ({
          "& .MuiMenu-paper": {
            backgroundColor:theme.palette.common.blue,
            color: 'white'
          }
        })}
        anchorOrigin={{
          vertical: 'top',
          
        }}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        {menuOptions.map((option, i) => 
          (<MenuItem 
            onClick={(event) => {handleClose(); setValue(1); handleMenuItemClick(event, i);}} 
            component={Link} 
            key={i}
            sx={(theme) => ({
              ...theme.typography.tab,
              opacity: 0.7,
              "&:hover": {
                opacity: 1
              },
            })}
            to={option.link}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>))}
      </Menu>
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer 
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        sx={(theme) => ({
          "& .MuiDrawer-paper": {
            backgroundColor: theme.palette.common.blue,
            color: 'white'
          }
        })}
      >
        <List disablePadding>
          <ListItemButton
            onClick={() => {setOpenDrawer(false); setValue(0)}}
            divider
            component={Link} 
            selected={value === 0}
            to="/"
          >
            <ListItemText 
              disableTypography
              sx={(theme) => ({
               ...theme.typography.tab,
               opacity: value === 0 ? 1 : 0.7, 
              })}
            >
              Home
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {setOpenDrawer(false); setValue(1)}}
            divider
            component={Link}
            selected={value === 1}
            to="/services"
          >
            <ListItemText 
              disableTypography
              sx={(theme) => ({
               ...theme.typography.tab, 
               opacity: value === 1 ? 1 : 0.7,
              })}
            >
              Services
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {setOpenDrawer(false); setValue(2)}}
            divider
            component={Link}
            selected={value === 2}
            to="/revolution"
          >
            <ListItemText 
              disableTypography
              sx={(theme) => ({
               ...theme.typography.tab,
               opacity: value === 2 ? 1 : 0.7, 
              })}  
            >
              The Revolution
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {setOpenDrawer(false); setValue(3)}}
            divider
            component={Link}
            selected={value === 3}
            to="/about"
          >
            <ListItemText 
              disableTypography
              sx={(theme) => ({
               ...theme.typography.tab,
               opacity: value === 3 ? 1 : 0.7, 
              })}
            >
              About Us
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {setOpenDrawer(false); setValue(4)}}
            divider
            component={Link}
            selected={value === 4}
            to="/contact"
          >
            <ListItemText 
              disableTypography
              sx={(theme) => ({
               ...theme.typography.tab,
               opacity: value === 4 ? 1 : 0.7, 
              })}
            >
              Contact Us
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {setOpenDrawer(false); setValue(5)}}
            divider
            component={Link}
            sx={(theme) => ({
              backgroundColor: theme.palette.common.orange 
            })}
            selected={value === 5}
            to="/estimate"
          >
            <ListItemText 
              disableTypography
              sx={(theme) => ({
               ...theme.typography.tab,
               opacity: value === 0 ? 5 : 0.7,
              })}
            >
              Free Estimate
            </ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton 
        disableRipple
        sx = {{
          marginLeft: "auto",
          "&:hover": {
            backgroundColor: "transparent"
          }
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon
          sx={{
            height: "50px",
            width: "50px"
          }}
        />
      </IconButton>      
    </>
  )

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
                  [theme.breakpoints.down("md")]: {
                    height: "7em"
                  },
                  [theme.breakpoints.down("xs")]: {
                    height: "5.5em",
                  }
                }}
                alt="Company Logos"
                src={logo}
              ></Box>
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar
        sx={{
          marginBottom: "3em",
          [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
          },
          [theme.breakpoints.down("xs")]: {
            marginBottome: "1.5em",
          } 
        }}
      />
    </>
  )
}

export default Header