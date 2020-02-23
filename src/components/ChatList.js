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

function ChatList({ classes, chats, setActiveChat, activeId, getMessages, user }) {
  return (
    <List className={classes.list}
          >
      {chats && chats.map((chat, index) => (
        <ChatListItem { ...chat }
                      key={index}
                      setActiveChat={setActiveChat}
                      isActive={activeId === chat._id}
                      getMessages={getMessages}
                      isCreator={user._id === chat.creator._id}
        />
      ))}
    </List>
  )
}

export default withStyles(styles)(ChatList)