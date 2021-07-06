import React from "react";
import { Link } from "@reach/router";
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
              <Link to="/">Home</Link>
            </Typography>
            <Typography>
              <Link to="/projects">Projects</Link>
            </Typography>
            <Typography>
              <Link to="/contact">Contact Me</Link>
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
