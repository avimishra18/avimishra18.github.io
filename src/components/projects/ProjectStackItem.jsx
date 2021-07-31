import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const stackPresets = {
  android: {
    label: "Android",
    icon: faAndroid,
    color: "#a4c639",
  },
  node: {
    label: "Node.js",
    icon: faNodeJs,
    color: "#215732",
  },
  mongo: {
    label: "MongoDB",
    icon: faDatabase,
    color: "#589636",
  },
  firebase: {
    label: "Firebase",
    icon: faDatabase,
    color: "#ff9500",
  },
  react: {
    label: "React.js",
    icon: faReact,
    color: "#00d8ff",
  },
};

function ProjectStackItem({ stack }) {
  const { label, icon, color } = stackPresets[stack];
  const StackBadge = withStyles({
    root: {
      color: color,
      borderColor: color,
      "&:hover": {
        background: "none",
        borderColor: color,
        cursor: "default",
      },
    },
    label: {
      textTransform: "none",
    },
  })(Button);

  return (
    <StackBadge
      size="small"
      disableRipple
      color="primary"
      variant="outlined"
      children={label}
      startIcon={<FontAwesomeIcon size="1x" icon={icon} color={color} />}
    />
  );
}

export default ProjectStackItem;
