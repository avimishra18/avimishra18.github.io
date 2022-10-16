import React from "react";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

function NavBarSpacing() {
  const classes = useStyles();
  return <div className={classes.toolbar} />;
}

export default NavBarSpacing;
