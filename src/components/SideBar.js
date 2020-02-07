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
  render() {
    const { classes, chats } = this.props;

    return (
      <Drawer
        className={classes.drawer}
        variant="persistent" open
        classes={{paper: classes.drawerPaper}}
      >
        <Search />
        <ChatList chats={chats} />
        <Navigation />
        <NewChatButton />
      </Drawer>
    );
  }
}

export default withStyles(styles)(SideBar);