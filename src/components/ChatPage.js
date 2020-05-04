import React from 'react';
import { withStyles } from "@material-ui/core";
import SideBar from "./SideBar";
import ChatHeader from "./ChatHeader";
import Chat from "./Chat";
import PropTypes from "prop-types";
import ErrorMessage from "./ErrorMessage";


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
      mountChat, unmountChat, error, isConnected
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
                    isConnected={isConnected}
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
                 isConnected={isConnected}
        />
        <Chat messages={messages}
              activeChat={activeChat}
              isChatMember={isChatMember}
              joinChat={joinChat}
              sendMessage={sendMessage}
              getMessages={getMessages}
              user={user}
              isConnected={isConnected}
        />
        <ErrorMessage error={error} />
      </div>
    );
  }
}

ChatPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  chats: PropTypes.array,
  myChats: PropTypes.array,
  createChat: PropTypes.func,
  logout: PropTypes.func,
  setActiveChat: PropTypes.func,
  activeChat: PropTypes.object,
  deleteChat: PropTypes.func,
  isAuth: PropTypes.bool,
  isChatMember: PropTypes.bool,
  joinChat: PropTypes.func,
  leaveChat: PropTypes.func,
  isMember: PropTypes.bool,
  isCreator: PropTypes.bool,
  sendMessage: PropTypes.func,
  getMessages: PropTypes.func,
  messages: PropTypes.array,
  user: PropTypes.object,
  editUser: PropTypes.func,
  filterApply: PropTypes.func,
  mountChat: PropTypes.func,
  unmountChat: PropTypes.func,
  fetchAllChats: PropTypes.func,
  fetchMyChats: PropTypes.func,
  socketsConnect: PropTypes.func
};

export default withStyles(styles)(ChatPage);