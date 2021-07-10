import React, { useState } from "react";
import { CssBaseline, Grid, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import lightTheme from "../themes/lightTheme";
import darkTheme from "../themes/darkTheme";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/global.css";

function LayoutWrapper(props) {
  const { children } = props;
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
        <NavBar darkMode={isDarkMode} setDarkMode={setIsDarkMode} />
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          style={{
            marginLeft: "0%",
            marginRight: "0%",
          }}
        >
          {children.map(child => (
            <Grid item>{child}</Grid>
          ))}
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default LayoutWrapper;
