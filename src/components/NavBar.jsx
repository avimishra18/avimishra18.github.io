import React from "react";
import { AppBar, Toolbar, Grid, Typography } from "@material-ui/core";
import DarkModeToggle from "react-dark-mode-toggle";

function NavBar({ darkMode, setDarkMode }) {
  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography>Logo</Typography>
          </Grid>
          <Grid>
            <Typography>
              <a href="/#home">Home</a>
            </Typography>
            <Typography>
              <a href="/#projects">Projects</a>
            </Typography>
            <Typography>
              <a href="/#contact">Contact Me</a>
            </Typography>
            <DarkModeToggle
              onChange={() => {
                setDarkMode(prevState => !prevState);
              }}
              checked={darkMode}
              size={60}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
