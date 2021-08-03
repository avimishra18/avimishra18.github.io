import React from "react";
import { Grid, Typography } from "@material-ui/core";
import NavBarSpacing from "../common/NavBarSpacing";
import ProjectItem from "./ProjectItem";
import projectsInformation from "../../content/projects_information.json";
import { PROJECTS_SECTION } from "../../utils/constants";

function ProjectsSection() {
  return (
    <div
      id={PROJECTS_SECTION}
      style={{ paddingLeft: "3vw", paddingRight: "3vw" }}
    >
      <NavBarSpacing />
      <br />
      <Typography variant="h2" color="primary">
        Projects
      </Typography>
      <br />
      <br />
      <Grid container spacing={5}>
        {projectsInformation.map(project => {
          const {
            name,
            description,
            img_src,
            stacks,
            url,
            github_url,
            store_url,
          } = project;
          return (
            <Grid item xs={12} md={6}>
              <ProjectItem
                imgSrc={img_src}
                name={name}
                description={description}
                stacks={stacks}
                url={url}
                github_url={github_url}
                store_url={store_url}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default ProjectsSection;
