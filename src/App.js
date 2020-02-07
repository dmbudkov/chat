import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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

import TextField from '@material-ui/core/TextField';

import Input from '@material-ui/core/Input';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

import { chats, messages } from './mock-data';
import titleInitials from './utils/title-initial';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - 320px)`,
    marginLeft: 320,
  },
  drawer: {
    width: 320,
    flexShrink: 0
  },
  drawerPaper: {
    width: 320
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
  },
  newChat: {
    position: "absolute",
    bottom: theme.spacing(11),
    right: theme.spacing(3),
  },
  card: {
    padding: 10,
    maxWidth: 275,
  },
  name: {
    fontSize: 15,
    marginBottom: 8
  },
  listItem: {
    '& > *:first-child': {
      marginRight: theme.spacing(3),
    }
  },
  listItemRight: {
    flexDirection: "row-reverse",
    '& > *:last-child': {
      marginRight: theme.spacing(3),
      backgroundColor: "#e6dcff"
    }
  }
}));



function App() {

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>Chat</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent" open
        classes={{paper: classes.drawerPaper}}>
        <Toolbar>
          <TextField fullWidth type="search" label="Search" />
        </Toolbar>
        <List className={classes.list}>
          {chats.map((chat, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  {titleInitials(chat.title)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={chat.title} secondary={chat.date} />
            </ListItem>
          ))}
        </List>
        <BottomNavigation
          value={value}Q
          onChange={handleChange}
          showLabels>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
        <IconButton
          className={classes.newChat}
          color="primary">
          <AddIcon />
        </IconButton>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.drawerHeader} />
        <List className={classes.messages}>
          {messages.map((message, index) => (
            <ListItem className={
              message.sender !== "me"
                ? classes.listItem
                : classes.listItemRight}
                      key={index}>
              <Avatar>
                {titleInitials(message.sender)}
              </Avatar>
              <Paper className={classes.card}>
                <Typography className={classes.name} gutterBottom>
                  {message.sender}
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  {message.content}
                </Typography>
              </Paper>
            </ListItem>
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

export default App;