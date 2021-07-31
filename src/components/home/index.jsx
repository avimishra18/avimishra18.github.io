import React from "react";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HomeIntroduction from "./HomeIntroduction.";
import CoderSVG from "../../assets/hello_coder.svg";
import CoderDarkSVG from "../../assets/hello_coder_dark.svg";

function HomeSection({ isDarkMode }) {
  const isSmUp = useMediaQuery(theme => theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme => theme.breakpoints.up("md"));

  // Breakpoints Commit
  console.log(
    "xs",
    useMediaQuery(theme => theme.breakpoints.only("xs"))
  );
  console.log(
    "sm",
    useMediaQuery(theme => theme.breakpoints.only("sm"))
  );
  console.log(
    "md",
    useMediaQuery(theme => theme.breakpoints.only("md"))
  );
  console.log(
    "lg",
    useMediaQuery(theme => theme.breakpoints.only("lg"))
  );
  console.log(
    "xl",
    useMediaQuery(theme => theme.breakpoints.only("xl"))
  );

  return (
    <div
      id="home"
      style={{ height: isMdUp ? "100vh" : "", width: isMdUp ? "90vw" : "" }}
    >
      <Grid
        container
        justify={isMdUp ? "space-evenly" : "center"}
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item sm={12} md={8} xl={6}>
          <HomeIntroduction isMdUp={isMdUp} isSmUp={isSmUp} />
        </Grid>
        <Grid item sm={12} md={4} xl={6}>
          <img
            src={isDarkMode ? CoderDarkSVG : CoderSVG}
            alt="Hello!"
            width="100%"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeSection;
