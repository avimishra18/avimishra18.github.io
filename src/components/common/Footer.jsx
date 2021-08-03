import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { HOME_SECTION } from "../../utils/constants";

function Footer() {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme => theme.breakpoints.up("sm"));

  return (
    <Grid
      container
      direction={isSmUp ? "row" : "column"}
      justify="center"
      alignItems="center"
      style={{
        marginTop: "25px",
        padding: "10px 0px",
        width: "100%",
        borderTop: "1px solid rgba(0,0,0,.11)",
        background: theme.palette.background.paper,
      }}
    >
      <Typography variant="body2">
        Built with{" "}
        <Typography variant="inherit" color="primary">
          <Link target="_blank" href="https://www.gatsbyjs.com/">
            Gatsby
          </Link>{" "}
        </Typography>
        &{" "}
        <Typography variant="inherit" color="primary">
          <Link target="_blank" href="https://material-ui.com/">
            {" "}
            Material-UI
          </Link>
          . &nbsp;
        </Typography>
      </Typography>
      <Typography variant="body2">
        Designed & Developed by{" "}
        <Typography variant="inherit" color="primary">
          <Link href={`/#${HOME_SECTION}`}>Avi Mishra.</Link>
        </Typography>
      </Typography>
    </Grid>
  );
}

export default Footer;
