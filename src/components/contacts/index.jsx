import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavBarSpacing from "../common/NavBarSpacing";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";
import { CONTACT_SECTION } from "../../utils/constants";

function ContactSection() {
  const isSmUp = useMediaQuery(theme => theme.breakpoints.up("sm"));

  return (
    <div id={CONTACT_SECTION}>
      <NavBarSpacing />
      <NavBarSpacing />
      <Typography
        variant="h2"
        color="primary"
        style={{ width: "100%", textAlign: "center" }}
        gutterBottom
      >
        Get In Touch
      </Typography>
      <br />
      <Grid
        container
        alignItems="stretch"
        justify="center"
        style={{ width: "100%" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <ContactInformation isSmUp={isSmUp} />
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          {isSmUp ? null : <br />}
          <ContactForm isSmUp={isSmUp} />
        </Grid>
      </Grid>
      {isSmUp ? <NavBarSpacing /> : null}
    </div>
  );
}

export default ContactSection;
