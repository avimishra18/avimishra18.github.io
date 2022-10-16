import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { HOME_SECTION } from "../../utils/constants";

function Footer() {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme => theme.breakpoints.up("sm"));

  return (
    <Grid
      container
      direction={isSmUp ? "row" : "column"}
      justifyContent="center"
      alignItems="center"
      style={{
        marginTop: "25px",
        padding: "10px 0px",
        width: "100%",
        borderTop: `1px solid ${theme.palette.secondary.light}`,
        background: theme.palette.background.paper,
      }}
    >
      <Typography variant="subtitle2">
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
      <Typography variant="subtitle2">
        Designed & Developed by{" "}
        <Typography variant="inherit" color="primary">
          Avi Mishra.
        </Typography>
      </Typography>
    </Grid>
  );
}

export default Footer;

