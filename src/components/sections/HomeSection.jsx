import React from "react";
import CoderSVG from "../../../static/hello_coder.svg";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MailIcon from "@material-ui/icons/Mail";

function HomeIntroduction() {
  return (
    <div>
      <Typography variant="h3">Namaste! I'm-</Typography>
      <Typography variant="h1" color="primary">
        &nbsp; &nbsp; AVI MISHRA
      </Typography>{" "}
      <br />
      <Typography variant="h4" color="textSecondary">
        <Typography variant="inherit" color="primary">
          <Box component="span" fontWeight="fontWeightBold">
            Software Engineer.&nbsp;
          </Box>
        </Typography>
        I specialize in developing Websites and Android Applications. Currently,
        interning as a front-end developer.
      </Typography>
      <br />
      <Grid container alignItems="center" sm={12} md={8} lg={6} wrap={true}>
        <Grid item>
          <Button
            color="primary"
            variant="outlined"
            className="social-media-icons"
            href="https://www.linkedin.com/avimishra18"
            target="_blank"
            children="Linkedin"
            startIcon={<FontAwesomeIcon size="2x" icon={faLinkedin} />}
            style={{ marginRight: "12px" }}
          />
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="outlined"
            className="social-media-icons"
            href="https://github.com/avimishra18"
            target="_blank"
            children="Github"
            startIcon={<FontAwesomeIcon size="2x" icon={faGithub} />}
            style={{ marginRight: "12px" }}
          />
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="outlined"
            className="social-media-icons"
            href="mailto:mishra.avi18@gmail.com"
            target="_blank"
            children="Email"
            startIcon={<MailIcon />}
          />
        </Grid>
      </Grid>
    </div>
  );
}

function HomeSection() {
  return (
    <div id="home" style={{ height: "100vh", width: "90vw" }}>
      <Grid
        container
        justify="space-evenly"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item sm={12} md={8} xl={6}>
          <HomeIntroduction />
        </Grid>
        <Grid item sm={12} md={4} xl={6}>
          <img src={CoderSVG} alt="Hello!" width="100%" />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeSection;
