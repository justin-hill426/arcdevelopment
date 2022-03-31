import React from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { useScrollTrigger } from '@mui/material';

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
    <ElevationScroll>
       <AppBar>
          <Toolbar>
            Arc Development
          </Toolbar>
        </AppBar>
    </ElevationScroll>
  )
}

export default Header