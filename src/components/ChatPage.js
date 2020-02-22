import React from 'react';
import { withStyles } from "@material-ui/core";
import { messages } from '../mock-data';
import SideBar from "./SideBar";
import ChatHeader from "./ChatHeader";
import Chat from "./Chat";


const styles = () => ({
  root: {
    display: 'flex',
  }
});


class ChatPage extends React.Component {

  componentDidMount() {
    const { fetchAllChats, fetchMyChats, urlId, setActiveChat } = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
      urlId ? setActiveChat(urlId) : null,
    ])
  }

  render() {
    const { classes, chats, myChats, createChat, logout, setActiveChat, activeId } = this.props;
    return (
      <div className={classes.root}>
        <ChatHeader logout={logout} />
        <SideBar chats={chats}
                 myChats={myChats}
                 createChat={createChat}
                 setActiveChat={setActiveChat}
                 activeId={activeId}
        />
        <Chat messages={messages} />
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);