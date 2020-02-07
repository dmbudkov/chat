import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { chats, messages } from './mock-data';
import SideBar from "./components/SideBar";
import ChatHeader from "./components/ChatHeader";
import Chat from "./components/Chat";

const styles = () => ({
  root: {
    display: 'flex',
  }
});


class App extends React.Component {
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

export default withStyles(styles)(App);