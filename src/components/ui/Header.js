import React, { useState, useEffect, useMemo } from 'react'
import { AppBar, IconButton, Toolbar, useScrollTrigger, Box, Tabs,
   Tab, Button, Menu, MenuItem, useMediaQuery, useTheme, SwipeableDrawer, List, ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom';
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

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const theme = useTheme()
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const handleChange = (e, newValue) => {
    props.setValue(newValue)
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
    props.setSelectedIndex(i);
    console.log(`Selected index is now ${i}`)
    console.log(`Value index is now ${props.value}`)
  }

  const menuOptions = useMemo(() => ([
    {name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0},
    {name: 'Custom Software Development', link: '/customsoftware', activeIndex: 1, selectedIndex: 1},
    {name: 'Mobile App Develpment', link: '/mobileapps', activeIndex: 1, selectedIndex: 2},
    {name: 'Website Development', link: '/websites', activeIndex: 1, selectedIndex: 3},
  ]), [])

  const routes = useMemo(() => ([
    {name: "Home", link: "/", activeIndex: 0},
    {
      name: "Services", 
      link: "/services", 
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: event => handleClick(event)
    },
    {name: "The Revolution", link: "/revolution", activeIndex: 2},
    {name: "About Us", link: "/about", activeIndex: 3},
    {name: "Contact Us", link: "/contact", activeIndex: 4},
  ]), [anchorEl])

  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch(window.location.pathname) {
        case `${route.link}`:
          if(props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          props.setValue(5);
          break;
        default:
          break;
        }
      });
    }, [props, props.value, menuOptions, props.selectedIndex, routes]);

  const tabs = (
    <>
      <Tabs
        value={props.value}
        onChange={handleChange}
        textColor= "inherit"
        sx={{
          marginLeft: "auto",
        }}
      >
        {
          routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            sx={(theme) => ({
            ...theme.typography.tab,
            minWidth: 10,
            marginLeft: "25px",
            opacity: props.value === route.activeIndex ? 1 : 0.7,
          })}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns} 
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
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
        keepMounted
        sx={(theme) => ({
          "& .MuiMenu-paper": {
            backgroundColor:theme.palette.common.blue,
            color: 'white'
          },
          zIndex: theme.zIndex.modal + 2,
        })}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        {menuOptions.map((option, i) => 
          (<MenuItem 
            onClick={(event) => {handleClose(); props.setValue(1); handleMenuItemClick(event, i);}} 
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
            selected={i === props.selectedIndex && props.value === 1}
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
        <List disablePadding>
          {
            routes.map((route, index) => (
              <ListItemButton
                key={`${route}${route.activeIndex}`}
                onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex)}}
                divider
                component={Link}
                selected={props.value === route.activeIndex}
                to={route.link}
              >
                <ListItemText
                  disableTypography
                  sx={(theme) => ({
                    ...theme.typography.tab,
                    opacity: props.value === route.activeIndex ? 1 : 0.7,
                  })}
                >
                  {route.name}
                </ListItemText>
              </ListItemButton>
            ))
          }
          <ListItemButton
            onClick={() => {setOpenDrawer(false); props.setValue(5)}}
            divider
            component={Link}
            sx={(theme) => ({
              backgroundColor: theme.palette.common.orange 
            })}
            selected={props.value === 5}
            to="/estimate"
          >
            <ListItemText 
              disableTypography
              sx={(theme) => ({
               ...theme.typography.tab,
               opacity: props.value === 0 ? 5 : 0.7,
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
        <AppBar
          sx={(theme) => ({
            zIndex: theme.zIndex.modal + 1,
          })}
        >
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
              onClick={() => props.setValue(0)}
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