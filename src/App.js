import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import Paper from '@material-ui/core/Paper';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';

import TextField from '@material-ui/core/TextField';

import Input from '@material-ui/core/Input';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';


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
    paddingBottom: theme.spacing(11),
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
  date: {
    fontSize: 12,
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
    }
  }
}));


export default function PersistentDrawerLeft() {
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
        variant="persistent"
        open
        classes={{paper: classes.drawerPaper}}
      >
        <Toolbar>
          <TextField fullWidth type="search" id="standard-required" label="Search" />
        </Toolbar>
        <List className={classes.list}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Ivan Vasilevich" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Fedora U" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Leo" secondary="July 20, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Leo" secondary="July 20, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Leo" secondary="July 20, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Leo" secondary="July 20, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Leo" secondary="July 20, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Leo" secondary="July 20, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Leo" secondary="July 20, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Leo" secondary="July 20, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Leo" secondary="July 20, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Leo" secondary="July 20, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Leo" secondary="July 20, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Leo" secondary="July 20, 2014" />
          </ListItem>
        </List>

          <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels
          >
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

        <div className={classes.messages}>
          <div>
            <ListItem>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <Paper className={classes.card}>
                <Typography className={classes.name} gutterBottom>
                  Dmitry Budkov
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Lets talk about React
                </Typography>
                <Typography className={classes.date} color="textSecondary" >
                  3 days ago
                </Typography>
              </Paper>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <Paper className={classes.card}>
                <Typography className={classes.name}>
                  Dmitry Budkov
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Lets talk about ReactLets talk about ReactLets talk about ReactLets
                  talk about ReactLets talk about ReactLets talk about ReactLets talk
                  about ReactLets talk about ReactLets talk about ReactLets
                  talk about React
                </Typography>
                <Typography className={classes.date} color="textSecondary" >
                  3 days ago
                </Typography>
              </Paper>
            </ListItem>
            <ListItem className={classes.listItemRight}>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <Paper className={classes.card}>
                <Typography className={classes.name} gutterBottom>
                  Dmitry Budkov
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  Lets talk about React
                </Typography>
                <Typography className={classes.date} color="textSecondary" >
                  3 days ago
                </Typography>
              </Paper>
            </ListItem>
            <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <Paper className={classes.card}>
              <Typography className={classes.name} gutterBottom>
                Dmitry Budkov
              </Typography>
              <Typography variant="body2" component="p" gutterBottom>
                Lets talk about React
              </Typography>
              <Typography className={classes.date} color="textSecondary" >
                3 days ago
              </Typography>
            </Paper>
          </ListItem>
          </div>


        </div>

        <Paper className={classes.input}>
          <Toolbar>
              <Input fullWidth id="standard-required" placeholder="Type your message..." />
          </Toolbar>
        </Paper>
      </main>
    </div>
  );
}
