import React from "react";
import { Grid, Typography } from "@mui/material";

function ContactItem({ Svg, label, value }) {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      wrap="nowrap"
      style={{ marginTop: "7.5px", marginBottom: "7.5px" }}
    >
      <Grid item style={{ marginRight: "15px" }}>
        <Svg color="primary" />
      </Grid>
      <Grid item>
        <Grid container direction="column" justifyContent="center" wrap="nowrap">
          <Grid item>
            <Typography color="textSecondary">{label}</Typography>
          </Grid>
          <Grid item>
            <Typography color="primary">{value}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactItem;
