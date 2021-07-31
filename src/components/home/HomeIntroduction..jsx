import React from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MailIcon from "@material-ui/icons/Mail";
import NavBarSpacing from "../common/NavBarSpacing";
import basicInformation from "../../content/basic_information.json";

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
    <Grid id="home-grid" container direction="column">
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

export default HomeIntroduction;
