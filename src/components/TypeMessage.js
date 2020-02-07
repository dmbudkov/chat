import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  input: {
    position: "absolute",
    bottom: theme.spacing(3),
    left: theme.spacing(3),
    right: theme.spacing(3)
  }
});

function TypeMessage({ classes }) {

  return (
    <Paper className={classes.input}>
      <Toolbar>
        <Input fullWidth id="standard-required" placeholder="Type your message..." />
      </Toolbar>
    </Paper>
  );
}

export default withStyles(styles)(TypeMessage);