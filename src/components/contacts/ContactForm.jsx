import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import basicInformation from "../../content/basic_information.json";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      color: theme.palette.common.white,
      background: theme.palette.primary.dark,
      "&:hover": {
        background: theme.palette.primary.main,
      },
    },
  })
);

function ContactForm({ isSmUp }) {
  const theme = useTheme();
  const classes = useStyles();
  const { contact_form_url } = basicInformation;
  const textFieldTopMargin = "15px";

  return (
    <form action={contact_form_url} method="POST">
      <Grid container direction="column">
        <Typography
          variant="subtitle1"
          color="textSecondary"
          align={isSmUp ? "left" : "center"}
          gutterBottom
        >
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
              classes={{
                root: theme.palette.type === "dark" ? classes.root : null,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactForm;
