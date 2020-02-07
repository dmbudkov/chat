import React from "react";
import { withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";


const styles = theme => ({
  newChat: {
    position: "absolute",
    bottom: theme.spacing(11),
    right: theme.spacing(3),
  }
});

function NewChatButton({ classes }) {
  return (
    <IconButton
      className={classes.newChat}
      color="primary">
      <AddIcon />
    </IconButton>
  )
}

export default withStyles(styles)(NewChatButton);