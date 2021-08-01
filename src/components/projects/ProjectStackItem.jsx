import React from "react";
import { Button } from "@material-ui/core";
import { withStyles, useTheme } from "@material-ui/core/styles";
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
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const monotoneBadge = true;

  const { label, icon, color } = stackPresets[stack];
  const StackBadge = withStyles({
    root: {
      color: monotoneBadge ? primaryColor : color,
      borderColor: monotoneBadge ? primaryColor : color,
      "&:hover": {
        background: "none",
        borderColor: monotoneBadge ? primaryColor : color,
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
      startIcon={
        <FontAwesomeIcon
          size="1x"
          icon={icon}
          color={monotoneBadge ? primaryColor : color}
        />
      }
      style={{ marginRight: "5px" }}
    />
  );
}

export default ProjectStackItem;
