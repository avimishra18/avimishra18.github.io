import React from "react";
import CoderSVG from "../../../static/hello_coder.svg";
import { Grid, Typography, Box, Button, ButtonGroup } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MailIcon from "@material-ui/icons/Mail";

function HomeIntroduction() {
  return (
    <div id="HomeIntroduction">
      <Typography variant="h4" color="secondary">
        Hi there! I'm
      </Typography>
      <Typography variant="h1" color="secondary" fontWeight="fontWeightBold">
        Avi Mishra
      </Typography>
      <Typography fontWeight="fontWeightBold" variant="p" color="secondary">
        <Box component="span" display="inline" fontWeight="fontWeightBold">
          Software Engineer.
        </Box>{" "}
        I specialize in developing Websites and Android Applications.
      </Typography>
      <br />
      <ButtonGroup
        color="secondary"
        variant="contained"
        className="social-media-icons"
      >
        <Button
          href="https://github.com/avimishra18"
          target="_blank"
          children="Github"
          startIcon={<FontAwesomeIcon size="2x" icon={faGithub} />}
        />
        <Button
          href="https://www.linkedin.com/avimishra18"
          target="_blank"
          children="Linkedin"
          startIcon={<FontAwesomeIcon size="2x" icon={faLinkedin} />}
        />
        <Button
          href="mailto:mishra.avi18@gmail.com"
          target="_blank"
          children="Email"
          startIcon={<MailIcon />}
        />
      </ButtonGroup>
    </div>
  );
}

function HomeSection() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <HomeIntroduction />
      </Grid>
      <Grid item>
        <img src={CoderSVG} alt="Hello!" width="100%" />
      </Grid>
    </Grid>
  );
}

export default HomeSection;
