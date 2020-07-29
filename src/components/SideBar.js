import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Search from "./Search";
import NewChatButton from "./NewChatButton";
import Drawer from "@material-ui/core/Drawer";
import Navigation from "./Navigation";
import ChatList from "./ChatList";
import PropTypes from "prop-types";


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
    const { classes, chats, myChats, members, createChat, setActiveChat, activeId, user, filterApply, mountChat, unmountChat, isConnected } = this.props;
    let dataChat;

    switch (this.state.activeTab) {
      case 0:
        dataChat = myChats;
        break;
      case 1:
        dataChat = chats;
        break;
      case 2:
        dataChat = members;
        break;
    }

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
                  disabled={!isConnected}
        />
        <Navigation activeTab={this.state.activeTab}
                    setActiveTab={this.setActiveTab}
                    disabled={!isConnected} />
        <NewChatButton createChat={createChat}
                       disabled={!isConnected}
        />
      </Drawer>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  chats: PropTypes.array,
  myChats: PropTypes.array,
  createChat: PropTypes.func,
  setActiveChat: PropTypes.func,
  activeId: PropTypes.string,
  user: PropTypes.object,
  filterApply: PropTypes.func,
  mountChat: PropTypes.func,
  unmountChat: PropTypes.func
};

export default withStyles(styles)(SideBar);