import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ContactItem from "./ContactItem";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import basicInformation from "../../content/basic_information.json";

function ContactInformation({ isSmUp }) {
  const { work_status, university, email, city } = basicInformation;

  return (
    <Grid
      container
      direction="column"
      alignItems={isSmUp ? "flex-start" : "center"}
    >
      <Grid item>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Basic Information
        </Typography>
      </Grid>
      <Grid item>
        <ContactItem Svg={WorkIcon} label="Available for" value={work_status} />
        <ContactItem Svg={SchoolIcon} label="University" value={university} />
        <ContactItem Svg={MailIcon} label="Email Address" value={email} />
        <ContactItem
          Svg={LocationOnIcon}
          label="City Of Residence"
          value={city}
        />
      </Grid>
    </Grid>
  );
}

export default ContactInformation;
