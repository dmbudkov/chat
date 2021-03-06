import React from "react";
import { withStyles } from "@material-ui/core";
import MessagesList from "./MessagesList";
import TypeMessage from "./TypeMessage";
import EmptyChat from "./EmptyChat";
import JoinChat from "./JoinChat";
import PropTypes from 'prop-types';

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
    width: '100%',
    backgroundColor: "#fafafa",
  },
  list: {
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  }
});

const Chat = ({ classes, messages, activeChat, isChatMember, joinChat, sendMessage, getMessages, user, isConnected }) => {

  let content = () => {
    if (!activeChat.id) return <EmptyChat />;
    if (!isChatMember) return <JoinChat joinChat={joinChat} />;
    return <MessagesList messages={ messages }
                         getMessages={getMessages}
                         user={user}
    />
  };

  return (
    <main className={classes.content}>
      <div className={classes.drawerHeader} />
      { content() }
      { isChatMember && <TypeMessage sendMessage={sendMessage}
                                     disabled={!isConnected}
      /> }
    </main>
  );
};

Chat.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  messages: PropTypes.array,
  activeChat: PropTypes.object,
  isChatMember: PropTypes.bool,
  joinChat: PropTypes.func,
  sendMessage: PropTypes.func,
  getMessages: PropTypes.func,
  user: PropTypes.object
};

export default withStyles(styles)(Chat);