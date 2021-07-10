import { createMuiTheme } from "@material-ui/core/styles";

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      dark: "#0000EE",
      main: "#0066ff",
      light: "#CCE0FF",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#7D7C83",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: `'Inter', sans-serif;`,
    h1: {
      fontWeight: 900,
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h4: {
      fontWeight: 300,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h5: {
      fontWeight: 300,
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    h6: {
      fontFamily: `'Pacifico', cursive;`,
      fontWeight: 300,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
  },
});

export default lightTheme;
