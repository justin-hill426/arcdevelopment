import { useTheme, Box } from "@mui/material"
import footerAdornment from '../../assets/Footer Adornment.svg'

const Footer = () => {
  const theme = useTheme()

  return (
    <footer
      style={{
        backgroundColor: theme.palette.common.blue,
        width: "100%"
      }}
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
        src={footerAdornment}
      ></Box>
    </footer>
  )
}

export default Footer