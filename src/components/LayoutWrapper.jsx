import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import lightTheme from "../themes/lightTheme";
import darkTheme from "../themes/darkTheme";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/global.css";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  root: {
    background: theme.palette.primary,
  },
}));

function LayoutWrapper(props) {
  const { children } = props;
  const classes = useStyles();
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className={classes.root}>
        <NavBar darkMode={isDarkMode} setDarkMode={setIsDarkMode} />
        <div className={classes.toolbar} />
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          {children}
          <Footer />
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default LayoutWrapper;
