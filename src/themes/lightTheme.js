import { createTheme, adaptV4Theme } from "@mui/material/styles";
import { typography } from "./common";

const lightTheme = createTheme(adaptV4Theme({
  palette: {
    mode: "light",
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
}));

export default lightTheme;
