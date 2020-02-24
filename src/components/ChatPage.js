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
    const { fetchAllChats, fetchMyChats, socketsConnect } = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats()
    ])
      .then(() => {
        socketsConnect();
    });
  }

  render() {
    const { classes, chats, myChats, createChat, logout, setActiveChat, activeChat, deleteChat, isAuth, isChatMember,
      joinChat, leaveChat, isMember, isCreator, sendMessage, getMessages, messages, user, editUser, filterApply,
      mountChat, unmountChat
    } = this.props;
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
                    user={user}
                    editUser={editUser}
        />
        <SideBar chats={chats}
                 myChats={myChats}
                 createChat={createChat}
                 setActiveChat={setActiveChat}
                 activeId={activeChat.id}
                 user={user}
                 filterApply={filterApply}
                 mountChat={mountChat}
                 unmountChat={unmountChat}
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