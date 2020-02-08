import React from 'react';
import { withStyles } from "@material-ui/core";
import { chats, messages } from '../mock-data';
import SideBar from "./SideBar";
import ChatHeader from "./ChatHeader";
import Chat from "./Chat";


const styles = () => ({
  root: {
    display: 'flex',
  }
});


class ChatPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ChatHeader />
        <SideBar chats={chats} />
        <Chat messages={messages} />
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);