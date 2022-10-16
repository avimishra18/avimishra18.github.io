import React from "react";
import Button from "@mui/material/Button";
import withStyles from "@mui/styles/withStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import stackPresets from "../../content/stackPresets";

const StackBadge = withStyles({
  root: {
    borderRadius: "15px",
    boxShadow: "none",
    opacity: 0.85,
    "&:hover": {
      background: "none",
      cursor: "default",
      opacity: 0.85,
    },
  },
  label: {
    textTransform: "none",
  },
})(Button);

function ProjectStackItem({ stack }) {
  const { label, icon } = stackPresets[stack];

  return (
    <StackBadge
      size="small"
      disableRipple
      color="primary"
      variant="outlined"
      children={label}
      startIcon={<FontAwesomeIcon size="1x" icon={icon} />}
    />
  );
}

export default ProjectStackItem;

