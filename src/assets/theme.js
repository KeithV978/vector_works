import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#00838f",
      light: "#CDFFF2",
    },
    secondary: {
      main: "#7928D2",
    },
    tertiary: {
      main: "#FB5498",
    },
    background: "#1c1c1c",
  },
  typography: {
    fontFamily: "Montserrat, Ubuntu-Regular, Rowdies-Bold,  Arial, sans-serif",
    h1: {
      fontFamily: '"Montserrat", "Open-Sans"',
      color: "#fff",
    },
    body1: {
      // fontFamily: '"Comme"',
      color: "#fff",
    },
    body2: {
      // fontFamily: '"Comme"',
      color: "#fff",
    },
    body6: {
      color: "#fff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
