import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import IndexImage from "../../content/images/index.jpg";
import MailIcon from "@material-ui/icons/Mail";

function ProjectStackItems({ children }) {
  console.log(children);
  return (
    <Button
      color="primary"
      variant="outlined"
      className="social-media-icons"
      children={children}
      startIcon={<MailIcon />}
    />
  );
}

function ProjectItem({ imgSrc, name, description, stacks, url }) {
  console.log(`../../content/images/${imgSrc}`);
  return (
    <Paper>
      <Grid container direction="column">
        <Grid item>
          <img src={IndexImage} alt="project-cover" />
        </Grid>
        <Grid item>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item>
          <Grid container>
            {stacks.map((stack, index) => (
              <ProjectStackItems children={stack} />
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
