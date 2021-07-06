import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#201a31",
    },
    secondary: {
      main: "#0ef3e1",
    },
  },
});

export default darkTheme;
