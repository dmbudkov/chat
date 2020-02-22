import React from "react";
import { withStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import ChatMenu from "./ChatMenu";
import UserMenu from "./UserMenu";

const styles = () => ({
  appBar: {
    position: "fixed",
  },
  toolbar: {
    justifyContent: "space-between"
  },
  wrapper: {
    display: "flex",
    alignItems: "center"
  },
  title: {
    marginRight: "10px"
  }
});

function ChatHeader({ classes, title, marginLeft = 320, logout, deleteChat }) {

  const showTitle = title ? title : "Chat";

  return (
    <AppBar className={classes.appBar}
            style={{
              width: `calc(100% - ${marginLeft}px)`,
              marginLeft
            }}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.wrapper}>
          <Typography className={classes.title} variant="h6" noWrap>{showTitle}</Typography>
          { title && <ChatMenu deleteChat={deleteChat} /> }
        </div>
        <UserMenu logout={logout} />
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(ChatHeader);