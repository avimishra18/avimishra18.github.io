import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Link,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ToggleSwitch from "./ToggleSwitch";
import basicInformation from "../../content/basic_information.json";

const useStyles = makeStyles({
  light: {
    boxShadow: "rgba(0,0,0,.11) 0 1px",
  },
  dark: {
    boxShadow: "none",
  },
});

function NavBar({ darkMode, setDarkMode }) {
  const classes = useStyles(darkMode);
  const isSmUp = useMediaQuery(theme => theme.breakpoints.up("sm"));

  return (
    <AppBar
      color="secondary"
      classes={darkMode ? { root: classes.dark } : { root: classes.light }}
    >
      <Toolbar disableGutters={!isSmUp}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item sm={3}>
            <Hidden xsDown>
              <Typography variant="h6" color="primary">
                {basicInformation.name_proper_case}
              </Typography>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography component="span" variant="h5" color="textSecondary">
              <Grid
                container
                justify={isSmUp ? "flex-end" : "center"}
                alignItems="center"
                spacing={isSmUp ? 4 : 2}
              >
                <Grid item>
                  <Link color="inherit" href="/#home">
                    Home
                  </Link>
                </Grid>
                <Grid item>
                  <Link color="inherit" href="/#projects">
                    Projects
                  </Link>
                </Grid>
                <Grid item>
                  <Link color="inherit" href="/#contact">
                    {isSmUp ? "Contact Me" : "Contact"}
                  </Link>
                </Grid>
                <Grid item>
                  <ToggleSwitch setDarkMode={setDarkMode} darkMode={darkMode} />
                </Grid>
              </Grid>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
