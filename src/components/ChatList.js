import React from "react";
import { withStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ChatListItem from "./ChatListItem";

const styles = {
  list: {
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  }
};

function ChatList({ classes, chats }) {
  return (
    <List className={classes.list}>
      {chats && chats.map((chat, index) => (
        <ChatListItem { ...chat } key={index} />
      ))}
    </List>
  )
}

export default withStyles(styles)(ChatList)