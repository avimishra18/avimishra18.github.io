import React from "react";
import { Grid, Paper, Typography, Box } from "@material-ui/core";
import IndexImage from "../../content/images/index.jpg";
import ProjectStackItem from "./ProjectStackItem";

function ProjectItem({ imgSrc, name, description, stacks, url }) {
  console.log(`../../content/images/${imgSrc}`);
  return (
    <Paper>
      <Grid container direction="column">
        <Grid item>
          <img src={IndexImage} alt="project-cover" />
        </Grid>
        <Grid item>
          <Typography variant="h4">
            <Box component="span" fontWeight="fontWeightBold">
              {name}
            </Box>
          </Typography>
        </Grid>
        <Grid item>
          <Grid container>
            {stacks.map((stack, index) => (
              <ProjectStackItem stack={stack} />
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProjectItem;
