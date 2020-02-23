import React from 'react';
import { withStyles } from "@material-ui/core";
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
    const { fetchAllChats, fetchMyChats } = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats()
    ])
  }

  render() {
    const { classes, chats, myChats, createChat, logout, setActiveChat, activeChat, deleteChat, isAuth, isChatMember,
      joinChat, leaveChat, isMember, isCreator, sendMessage, getMessages, messages, user } = this.props;
    return (
      <div className={classes.root}>
        <ChatHeader title={activeChat.title}
                    logout={logout}
                    deleteChat={deleteChat}
                    isAuth={isAuth}
                    isMember={isMember}
                    isCreator={isCreator}
                    joinChat={joinChat}
                    leaveChat={leaveChat}
        />
        <SideBar chats={chats}
                 myChats={myChats}
                 createChat={createChat}
                 setActiveChat={setActiveChat}
                 activeId={activeChat.id}
                 user={user}
        />
        <Chat messages={messages}
              activeChat={activeChat}
              isChatMember={isChatMember}
              joinChat={joinChat}
              sendMessage={sendMessage}
              getMessages={getMessages}
              user={user}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);