import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Paper from '@material-ui/core/Paper';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';

import Input from '@material-ui/core/Input';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

import { chats, messages } from './mock-data';
import titleInitials from './utils/title-initial';

import Search from './components/Search';
import Message from "./components/Message";
import SideBar from "./components/SideBar";


const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - 320px)`,
    marginLeft: 320,
  },
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
    width: '100%'
  },
  list: {
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  },
  messages: {
    padding: `0 ${theme.spacing(3)}px`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(14),
    overflowY: 'scroll'
  },
  input: {
    position: "absolute",
    bottom: theme.spacing(3),
    left: theme.spacing(3),
    right: theme.spacing(3)
  }
});


class App extends React.Component {

  constructor(props) {
    super(props);
    this.messages = React.createRef();
  }

  scrollDown() {
    const node = this.messages.current;
    if(node) {
      node.scrollTop = node.scrollHeight;
    }
  }

  componentDidUpdate() {
    this.scrollDown();
  }

  componentDidMount() {
    this.scrollDown()
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>

        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>Chat</Typography>
          </Toolbar>
        </AppBar>

        <SideBar />

        <main className={classes.content}>
          <div className={classes.drawerHeader} />
          <List className={classes.messages} ref={this.messages}>
            {messages.map((message, index) => (
              <Message {...message} key={index} />
            ))}
          </List>

          <Paper className={classes.input}>
            <Toolbar>
              <Input fullWidth id="standard-required" placeholder="Type your message..." />
            </Toolbar>
          </Paper>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);