import React from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Hidden,
  IconButton,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MailIcon from "@material-ui/icons/Mail";
import NavBarSpacing from "../common/NavBarSpacing";
import basicInformation from "../../content/basic_information.json";
import CoderSVG from "../../assets/hello_coder.svg";
import CoderDarkSVG from "../../assets/hello_coder_dark.svg";

function HomeIntroduction({ isMdUp, isSmUp }) {
  const {
    first_name_upper_case,
    last_name_upper_case,
    email,
    github_url,
    linkedin_url,
    salutation,
    profession,
    short_introduction,
  } = basicInformation;

  return (
    <Grid id="hehe" container direction="column">
      {isMdUp ? null : (
        <>
          <NavBarSpacing />
          <NavBarSpacing />
        </>
      )}
      <Grid item xs={12}>
        <Typography variant="h3">{salutation}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h1" color="primary">
          &nbsp; &nbsp;{" "}
          {first_name_upper_case + (isSmUp ? " " + last_name_upper_case : "")}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant={isMdUp ? "h4" : "h5"} color="textSecondary">
          <Typography variant="inherit" color="primary">
            <Box component="span" fontWeight="fontWeightBold">
              {profession}&nbsp;
            </Box>
          </Typography>
          {short_introduction}
        </Typography>
      </Grid>
      <Grid item>
        <br />
      </Grid>
      <Hidden xsDown>
        <Grid
          container
          alignItems="center"
          sm={12}
          md={8}
          lg={6}
          wrap={true}
          spacing={2}
        >
          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              className="social-media-icons"
              href={linkedin_url}
              target="_blank"
              children="Linkedin"
              startIcon={<FontAwesomeIcon size="2x" icon={faLinkedin} />}
            />
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              className="social-media-icons"
              href={github_url}
              target="_blank"
              children="Github"
              startIcon={<FontAwesomeIcon size="2x" icon={faGithub} />}
            />
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              className="social-media-icons"
              href={`mailto:${email}`}
              target="_blank"
              children="Email"
              startIcon={<MailIcon />}
            />
          </Grid>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid container alignItems="center" justify="center">
          <Grid item>
            <IconButton
              color="primary"
              variant="outlined"
              className="social-media-icons"
              href={linkedin_url}
              target="_blank"
              children={<FontAwesomeIcon size="1x" icon={faLinkedin} />}
            />
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              variant="outlined"
              className="social-media-icons"
              href={github_url}
              target="_blank"
              children={<FontAwesomeIcon size="1x" icon={faGithub} />}
            />
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              variant="outlined"
              className="social-media-icons"
              href={`mailto:${email}`}
              target="_blank"
              children={<MailIcon />}
            />
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
}

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
