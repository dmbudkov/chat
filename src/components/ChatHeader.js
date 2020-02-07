import React from "react";
import { withStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";


const styles = {
  appBar: {
    width: `calc(100% - 320px)`,
    marginLeft: 320,
  }
};

function ChatHeader({ classes, title="Chat" }) {
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(ChatHeader);