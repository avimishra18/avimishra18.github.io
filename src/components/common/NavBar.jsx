import React, { useRef } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Link,
  Hidden,
} from "@material-ui/core";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import breakpointLogger from "../../utils/breakpointLogger";
import ToggleSwitch from "./ToggleSwitch";
import basicInformation from "../../content/basic_information.json";
import {
  HOME_SECTION,
  PROJECTS_SECTION,
  CONTACT_SECTION,
} from "../../utils/constants";

const useStyles = makeStyles(theme =>
  createStyles({
    light: {
      boxShadow: "rgba(0,0,0,.11) 0 1px",
    },
    dark: {
      boxShadow: "none",
    },
    linkRoot: {
      "&:hover": {
        color: theme.palette.text.primary,
      },
    },
  })
);

function NavBar({ darkMode, setDarkMode, activeHashRoute }) {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const classes = useStyles();
  const isSmUp = useMediaQuery(theme => theme.breakpoints.up("sm"));
  const breakpoint = useRef();
  breakpointLogger(useMediaQuery, breakpoint);

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
                  <Link
                    underline="none"
                    color="inherit"
                    href={`/#${HOME_SECTION}`}
                    classes={{ root: classes.linkRoot }}
                    style={{
                      color:
                        activeHashRoute === HOME_SECTION ? primaryColor : null,
                    }}
                  >
                    Home
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    underline="none"
                    color="inherit"
                    href={`/#${PROJECTS_SECTION}`}
                    classes={{ root: classes.linkRoot }}
                    style={{
                      color:
                        activeHashRoute === "projects" ? primaryColor : null,
                    }}
                  >
                    Projects
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    underline="none"
                    color="inherit"
                    href={`/#${CONTACT_SECTION}`}
                    classes={{ root: classes.linkRoot }}
                    style={{
                      color:
                        activeHashRoute === "contact" ? primaryColor : null,
                    }}
                  >
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
