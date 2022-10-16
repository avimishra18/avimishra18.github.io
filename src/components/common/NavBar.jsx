import React, { useRef } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Link,
  Hidden,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import useMediaQuery from "@mui/material/useMediaQuery";
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
    root: {
      boxShadow: `${theme.palette.secondary.light} 0 1px`,
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
    <AppBar color="secondary" classes={{ root: classes.root }}>
      <Toolbar disableGutters={!isSmUp}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sm={3}>
            <Hidden smDown>
              <Typography variant="h6" color="primary">
                {basicInformation.name_proper_case}
              </Typography>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography component="span" variant="h5" color="textSecondary">
              <Grid
                container
                justifyContent={isSmUp ? "flex-end" : "center"}
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
