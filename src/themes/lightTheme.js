import { createMuiTheme } from "@material-ui/core/styles";
import { typography } from "./common";

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
      light: "rgba(0,0,0,.11)",
    },
    text: {
      primary: "#000000",
      secondary: "#48474b",
    },
    background: {
      default: "#ffffff",
      paper: "#f7f7f8",
    },
  },
  typography,
});

export default lightTheme;
