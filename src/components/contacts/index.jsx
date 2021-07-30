import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SendIcon from "@material-ui/icons/Send";
import NavBarSpacing from "../common/NavBarSpacing";
import ContactItem from "./ContactItem";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import basicInformation from "../../content/basic_information.json";

function ContactForm() {
  const { contact_form_url } = basicInformation;
  const textFieldTopMargin = "15px";

  return (
    <form action={contact_form_url} method="POST">
      <Grid container direction="column">
        <Typography variant="subtitle1" color="textSecondary">
          Drop me a message
        </Typography>
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={6}>
            <TextField
              type="name"
              name="name"
              label="Name"
              variant="outlined"
              color="primary"
              autoComplete="name"
              required
              fullWidth
              style={{ marginTop: textFieldTopMargin }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              color="primary"
              autoComplete="email"
              required
              fullWidth
              style={{ marginTop: textFieldTopMargin }}
            />
          </Grid>
        </Grid>

        <TextField
          type="message"
          name="message"
          label="Message"
          variant="outlined"
          color="primary"
          required
          fullWidth
          size="medium"
          multiline
          rows={3}
          style={{ marginTop: textFieldTopMargin }}
        />
        <Grid container justify="flex-end">
          <Grid item>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              children="Send"
              startIcon={<SendIcon />}
              style={{ marginTop: textFieldTopMargin }}
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

function ContactInformation() {
  const { work_status, university, email, city } = basicInformation;

  return (
    <Grid container direction="column">
      <Typography variant="subtitle1" color="textSecondary">
        Basic Information
      </Typography>
      <ContactItem Svg={WorkIcon} label="Available for" value={work_status} />
      <ContactItem Svg={SchoolIcon} label="University" value={university} />
      <ContactItem Svg={MailIcon} label="Email Address" value={email} />
      <ContactItem
        Svg={LocationOnIcon}
        label="City Of Residence"
        value={city}
      />
    </Grid>
  );
}

function ContactSection() {
  const isSmUp = useMediaQuery(theme => theme.breakpoints.up("sm"));

  return (
    <div id="contact">
      <NavBarSpacing />
      <Typography
        variant="h2"
        color="primary"
        style={{ width: "100%", textAlign: "center" }}
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
          <ContactInformation />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {isSmUp ? null : <br />}
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactSection;
