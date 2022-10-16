import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import MailIcon from "@mui/icons-material/Mail";
import NavBarSpacing from "../common/NavBarSpacing";
import basicInformation from "../../content/basic_information.json";

function HomeIntroduction({ isMdUp, isSmUp }) {
  const {
    first_name_upper_case,
    last_name_upper_case,
    email,
    github_url,
    linkedin_url,
    twitter_url,
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
      <Hidden smDown>
        <Grid container alignItems="center" sm={12} wrap={true} spacing={2}>
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
              href={twitter_url}
              target="_blank"
              children="Twitter"
              startIcon={<FontAwesomeIcon size="2x" icon={faTwitter} />}
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
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <IconButton
              color="primary"
              variant="outlined"
              className="social-media-icons"
              href={linkedin_url}
              target="_blank"
              children={<FontAwesomeIcon size="1x" icon={faLinkedin} />}
              size="large"
            />
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              variant="outlined"
              className="social-media-icons"
              href={twitter_url}
              target="_blank"
              children={<FontAwesomeIcon size="1x" icon={faTwitter} />}
              size="large"
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
              size="large"
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
              size="large"
            />
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default HomeIntroduction;

