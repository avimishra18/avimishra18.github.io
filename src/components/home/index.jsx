import React from "react";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeIntroduction from "./HomeIntroduction.";
import CoderSVG from "../../assets/hello_coder.svg";
import CoderDarkSVG from "../../assets/hello_coder_dark.svg";
import { HOME_SECTION } from "../../utils/constants";

function HomeSection({ isDarkMode }) {
  const isSmUp = useMediaQuery(theme => theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme => theme.breakpoints.up("md"));

  return (
    <div
      id={HOME_SECTION}
      style={{ height: isMdUp ? "100vh" : "", width: isMdUp ? "90vw" : "" }}
    >
      <Grid
        container
        justifyContent={isMdUp ? "space-evenly" : "center"}
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
