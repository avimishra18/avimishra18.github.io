import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import ProjectStackItem from "./ProjectStackItem";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      borderRadius: "12px",
    },
    buttonRoot: {
      "&:hover": {
        background:
          theme.palette.mode === "dark"
            ? theme.palette.secondary.light
            : theme.palette.primary.light,
      },
    },
  })
);

function ProjectItem({
  imgSrc,
  name,
  description,
  stacks,
  url,
  github_url,
  // store_url,
}) {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const classes = useStyles();
  const isSmUp = useMediaQuery(theme => theme.breakpoints.up("sm"));

  const data = useStaticQuery(
    graphql`
      query ImagesQuery {
        allFile(
          filter: {
            sourceInstanceName: { eq: "assets" }
            ext: { regex: "/(jpg)|(jpeg)|(png)/" }
          }
        ) {
          edges {
            node {
              absolutePath
              childImageSharp {
                fluid {
                  aspectRatio
                  base64
                  originalName
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    `
  );

  const oneImage = data.allFile.edges.filter(
    edge => edge.node.childImageSharp.fluid.originalName === imgSrc
  )[0].node.childImageSharp.fluid;

  return (
    <Paper
      variant="outlined"
      classes={{ root: classes.root }}
      style={{ overflow: "hidden" }}
    >
      <Grid container direction="column">
        <Grid item style={{ width: "100%" }}>
          <Img fluid={oneImage} alt="project-cover" style={{ width: "100%" }} />
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
          <Grid
            item
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography noWrap variant={isSmUp ? "h3" : "h4"} color="primary">
                <Box component="span" fontWeight="fontWeightBold">
                  {name}
                </Box>
              </Typography>
            </Grid>
            <Grid item>
              {github_url ? (
                <IconButton href={github_url} target="_blank" size="large">
                  <FontAwesomeIcon icon={faGithub} color={primaryColor} />
                </IconButton>
              ) : null}
              {url ? (
                <Button
                  size={isSmUp ? "medium" : "small"}
                  color="primary"
                  variant="text"
                  href={url}
                  target="_blank"
                  children="Open"
                  endIcon={
                    <FontAwesomeIcon
                      icon={faExternalLinkSquareAlt}
                      color={primaryColor}
                    />
                  }
                  classes={{ root: classes.buttonRoot }}
                />
              ) : null}
              {/*store_url ? (
                <Button
                  color="primary"
                  variant="text"
                  href={store_url}
                  target="_blank"
                  children="PlayStore"
                  startIcon={
                    <FontAwesomeIcon icon={faGooglePlay} color={primaryColor} />
                  }
                  classes={{ root: classes.buttonRoot }}
                />
              ) : null*/}
            </Grid>
          </Grid>
          <Grid container item spacing={1} style={{ marginTop: "2.25%" }}>
            {stacks.map((stack, index) => (
              <Grid item>
                <ProjectStackItem stack={stack} />
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <br />
            <Typography
              variant={isSmUp ? "body1" : "body2"}
              color="textSecondary"
            >
              {description}
            </Typography>
            <br />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProjectItem;

