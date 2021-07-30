import React from "react";
import { Grid, Typography } from "@material-ui/core";
// import NavBarSpacing from "../common/NavBarSpacing";
import ProjectItem from "./ProjectItem";
import projectsInformation from "../../content/projects_information.json";

function ProjectsSection() {
  return (
    <div id="projects">
      <Typography
        variant="h2"
        color="primary"
        // style={{ width: "100%", textAlign: "center" }}
      >
        Projects
      </Typography>
      <br />
      <Grid container>
        {projectsInformation.map(project => {
          const { name, description, img_src, stacks, url } = project;
          return (
            <Grid item>
              <ProjectItem
                imgSrc={img_src}
                name={name}
                description={description}
                stacks={stacks}
                url={url}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ProjectsSection;
