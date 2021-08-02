import {
  faAndroid,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFireAlt } from "@fortawesome/free-solid-svg-icons";

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
    icon: faFireAlt,
    color: "#ff9500",
  },
  react: {
    label: "React.js",
    icon: faReact,
    color: "#00d8ff",
  },
};

export default stackPresets;
