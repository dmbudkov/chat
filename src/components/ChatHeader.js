import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";


function ChatHeader({ classes, title="Chat", marginLeft = 320 }) {
  return (
    <AppBar position="fixed"
            style={{
              width: `calc(100% - ${marginLeft}px)`,
              marginLeft
            }}>
      <Toolbar>
        <Typography variant="h6" noWrap>{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default ChatHeader;