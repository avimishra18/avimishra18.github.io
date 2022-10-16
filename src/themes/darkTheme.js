import { createTheme } from "@mui/material/styles";
import { typography } from "./common";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      dark: "#0C90C4",
      main: "#0ab9ff",
      light: "#48CBFF",
    },
    secondary: {
      main: "#121212",
      light: "#222222",
    },
    text: {
      primary: "#ffffff",
      secondary: "#CBCACE",
    },
    background: {
      default: "#121212",
      paper: "#171717",
    },
  },
  typography,
});

export default darkTheme;

