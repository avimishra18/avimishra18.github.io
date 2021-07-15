import { createMuiTheme } from "@material-ui/core/styles";
import { typography } from "./common";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      dark: "#0000EE",
      main: "#0066ff",
      light: "#CCE0FF",
    },
    secondary: {
      main: "#121212",
    },
    text: {
      primary: "#ffffff",
      secondary: "#7D7C83",
    },
    action: {
      active: "#7D7C83",
    },
    background: {
      default: "#121212",
      paper: "#171717",
    },
  },
  typography,
});

export default darkTheme;
