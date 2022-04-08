import { useTheme, Box, Grid, Hidden } from "@mui/material"
import footerAdornment from '../../assets/Footer Adornment.svg'
import { Link } from "react-router-dom"
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const Footer = (props) => {
  const theme = useTheme()

  return (
    <footer
      style={{
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative",
      }}
    >
      <Hidden mdDown>
        <Grid
          container
          sx={{
            position: "absolute",
          }}
          justifyContent="center"
        >
          <Grid item sx={{margin: "3em"}}>
            <Grid container direction="column" spacing={2}>
              <Grid 
                item
                onClick={() => props.setValue(0)}
                component={Link}
                to="/"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{margin: "3em"}}>
            <Grid container direction="column" spacing={2}>
              <Grid 
                item
                onClick={() => {props.setValue(1); props.setSelectedIndex(0)}}
                component={Link}
                to="/services"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Services
              </Grid>
              <Grid 
                item
                component={Link}
                to="/customsoftware"
                onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Custom Software Development
              </Grid>
              <Grid 
                item
                component={Link}
                to="/mobileapps"
                onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Mobile App Development
              </Grid>
              <Grid 
                item
                component={Link}
                to="/websites"
                onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{margin: "3em"}}>
            <Grid container direction="column" spacing={2}>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/revolution"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                The Revolution
              </Grid>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/revolution"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Technology
              </Grid>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/revolution"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{margin: "3em"}}>
            <Grid container direction="column" spacing={2}>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                About Us
              </Grid>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                History
              </Grid>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{margin: "3em"}}>
            <Grid container direction="column" spacing={2}>
              <Grid 
                item
                component={Link}
                onClick={() => props.setValue(4)}
                to="/contact"
                sx={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Box
        component="img"
        sx={{
          width: "25em",
          verticalAlign: "bottom",
          [theme.breakpoints.down("md")]: {
            width: "21em",
          },
          [theme.breakpoints.down("xs")]: {
            width: "15em",
          },
        }}
        alt="Company Logos"
        src={footerAdornment}
      ></Box>

      <Grid 
        container
        justifyContent="flex-end"
        sx={{
          position: "absolute",
          marginTop: "-6em",
          right: "1.5em",
          [theme.breakpoints.down("sm")]: {
            right: "0.6em",
          },
        }}
        spacing={2}
      >
        <Grid 
          item 
          component="a" 
          href="https://www.facebook.com" 
          rel="noopener noreferrer" 
          target="_blank"
        >
          <Box
            component="img"
            alt="Facebook Logo"
            src={facebook}
            sx={{
              height: "4em",
              width: "4em",
              [theme.breakpoints.down("sm")]: {
                height: "2.5em",
                width: "2.5em",
              }
            }}
          />
        </Grid>
        <Grid item component="a" href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <Box
            component="img"
            alt="Twitter Logo"
            src={twitter}
            sx={{
              height: "4em",
              width: "4em",
              [theme.breakpoints.down("sm")]: {
                height: "2.5em",
                width: "2.5em",
              }
            }}
          />
        </Grid>
        <Grid item component="a" href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
          <Box
            component="img"
            alt="Instagram Logo"
            src={instagram}
            sx={{
              height: "4em",
              width: "4em",
              [theme.breakpoints.down("sm")]: {
                height: "2.5em",
                width: "2.5em",
              }
            }}
          />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer