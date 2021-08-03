import React from "react";
import { Grid, Paper, Typography, Box, IconButton } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import ProjectStackItem from "./ProjectStackItem";

const useStyles = makeStyles({
  root: {
    borderRadius: "12px",
  },
});

function ProjectItem({ imgSrc, name, description, stacks, url, github_url }) {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const classes = useStyles();

  return (
    <Paper
      variant="outlined"
      classes={{ root: classes.root }}
      style={{ overflow: "hidden" }}
    >
      <Grid container direction="column">
        <Grid item style={{ width: "100%" }}>
          <img
            src={`./${imgSrc}`}
            alt="project-cover"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{
            paddingLeft: "2.5%",
            paddingRight: "2.5%",
            marginTop: "2.25%",
          }}
        >
          <Grid item container justify="space-between" alignItems="stretch">
            <Grid item>
              <Typography variant="h3" color="primary">
                <Box component="span">{name}</Box>
              </Typography>
            </Grid>
            <Grid item>
              {github_url ? (
                <IconButton href={github_url} target="_blank">
                  <FontAwesomeIcon icon={faGithub} color={primaryColor} />
                </IconButton>
              ) : null}
              {url ? (
                <IconButton href={url} target="_blank">
                  <FontAwesomeIcon
                    icon={faExternalLinkSquareAlt}
                    color={primaryColor}
                  />
                </IconButton>
              ) : null}
            </Grid>
          </Grid>
          <Grid item style={{ marginTop: "2.25%" }}>
            <Grid container>
              {stacks.map((stack, index) => (
                <ProjectStackItem stack={stack} />
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <br />
            <Typography color="textSecondary">{description}</Typography>
            <br />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProjectItem;
