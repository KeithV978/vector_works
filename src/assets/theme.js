import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#00FFBD",
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
    fontFamily: "Comme, Balthazar, Righteous,  Arial, sans-serif",
    h1: {
      fontFamily: '"Righteous", "Open-Sans"',
      color: "#fff",
    },
    h2: {
      fontFamily: '"Righteous", "Open-Sans"',
      color: "#fff",
    },
    h3: {
      fontFamily: '"Balthazar", "Open-Sans"',
      color: "#fff",
    },
    h4: {
      fontFamily: '"Righteous", "Open-Sans"',
      color: "#fff",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Comme",
      color: "#fff",
    },
    body1: {
      fontFamily: '"Comme"',
      color: "#fff",
    },
    body2: {
      color: "#fff",
      fontFamily: '"Comme"',
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
