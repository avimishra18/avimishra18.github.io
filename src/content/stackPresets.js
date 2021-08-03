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
  },
  node: {
    label: "Node.js",
    icon: faNodeJs,
  },
  mongo: {
    label: "MongoDB",
    icon: faDatabase,
  },
  firebase: {
    label: "Firebase",
    icon: faFireAlt,
  },
  react: {
    label: "React.js",
    icon: faReact,
  },
};

export default stackPresets;
