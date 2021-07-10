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
import ToggleSwitch from "./common/ToggleSwitch";

const useStyles = makeStyles({
  root: {
    boxShadow: "rgba(0,0,0,.11) 0 1px",
  },
});

function NavBar({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const isSmUp = useMediaQuery(theme => theme.breakpoints.up("sm"));

  return (
    <AppBar color="secondary" classes={{ root: classes.root }}>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item sm={3}>
            <Hidden xsDown>
              <Typography variant="h6" color="primary">
                {`Avi Mishra`}
              </Typography>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography component="span" variant="h5" color="textSecondary">
              <Grid
                container
                justify={isSmUp ? "flex-end" : "center"}
                alignItems="center"
                spacing={4}
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
                    Contact Me
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
