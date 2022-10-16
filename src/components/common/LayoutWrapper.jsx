import React, { useState } from "react";
import { CssBaseline, Grid, Box } from "@mui/material";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import lightTheme from "../../themes/lightTheme";
import darkTheme from "../../themes/darkTheme";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../../styles/global.css";

function LayoutWrapper(props) {
  const { children, activeHashRoute } = props;
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Box>
          <NavBar
            darkMode={isDarkMode}
            setDarkMode={setIsDarkMode}
            activeHashRoute={activeHashRoute}
          />
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            style={{
              marginLeft: "4%",
              marginRight: "4%",
              width: "92%",
            }}
          >
            {children.map(child => (
              <Grid item style={{ width: "100%" }}>
                {React.cloneElement(child, { isDarkMode, setIsDarkMode })}
              </Grid>
            ))}
          </Grid>
          <Footer />
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default LayoutWrapper;
