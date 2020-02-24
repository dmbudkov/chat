import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Search from "./Search";
import NewChatButton from "./NewChatButton";
import Drawer from "@material-ui/core/Drawer";
import Navigation from "./Navigation";
import ChatList from "./ChatList";


const styles = () => ({
  drawer: {
    width: 320,
    flexShrink: 0
  },
  drawerPaper: {
    width: 320
  }
});


class SideBar extends React.Component {
  state = {
    activeTab: 0
  };

  setActiveTab = (e, activeTab) => {
    this.setState({
      ...this.state,
      activeTab
    });
  };

  render() {
    const { classes, chats, myChats, createChat, setActiveChat, activeId, user, filterApply, mountChat, unmountChat } = this.props;
    const dataChat = this.state.activeTab === 1
      ? chats
      : myChats;

    return (
      <Drawer
        className={classes.drawer}
        variant="persistent" open
        classes={{paper: classes.drawerPaper}}
      >
        <Search filterApply={filterApply} />
        <ChatList chats={dataChat}
                  setActiveChat={setActiveChat}
                  mountChat={mountChat}
                  unmountChat={unmountChat}
                  activeId={activeId}
                  user={user}
        />
        <Navigation activeTab={this.state.activeTab}
                    setActiveTab={this.setActiveTab} />
        <NewChatButton createChat={createChat} />
      </Drawer>
    );
  }
}

export default withStyles(styles)(SideBar);