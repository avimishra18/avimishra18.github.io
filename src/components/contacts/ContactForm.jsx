import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
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

export default ContactForm;
