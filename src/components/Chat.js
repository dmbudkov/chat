import React from "react";
import { withStyles } from "@material-ui/core";
import MessagesList from "./MessagesList";
import TypeMessage from "./TypeMessage";

const styles = theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    display: 'flex',
    position: 'relative',
    flexDirection: "column",
    maxHeight: '100vh',
    height: '100vh',
    width: '100%'
  },
  list: {
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  }
});

const Chat = ({ classes, messages }) => (
  <main className={classes.content}>
    <div className={classes.drawerHeader} />
    <MessagesList messages={ messages } />
    <TypeMessage />
  </main>
);

export default withStyles(styles)(Chat);