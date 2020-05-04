import React from "react";
import { withStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ChatListItem from "./ChatListItem";
import PropTypes from "prop-types";

const styles = {
  list: {
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  }
};

function ChatList({ classes, chats, setActiveChat, activeId, getMessages, user, mountChat, unmountChat, disabled }) {
  return (
    <List className={classes.list}
          >
      {chats && chats.map((chat, index) => (
        <ChatListItem { ...chat }
                      key={index}
                      setActiveChat={setActiveChat}
                      mountChat={mountChat}
                      unmountChat={unmountChat}
                      activeId={activeId}
                      isActive={activeId === chat._id}
                      getMessages={getMessages}
                      isCreator={user._id === chat.creator._id}
                      disabled={disabled}
        />
      ))}
    </List>
  )
}

ChatList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  chats: PropTypes.array,
  setActiveChat: PropTypes.func,
  activeId: PropTypes.string,
  getMessages: PropTypes.func,
  user: PropTypes.object,
  mountChat: PropTypes.func,
  unmountChat: PropTypes.func
};


export default withStyles(styles)(ChatList)