import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Search from "./Search";
import List from "@material-ui/core/List";
import {chats} from "../mock-data";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import titleInitials from "../utils/title-initial";
import ListItemText from "@material-ui/core/ListItemText";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import ExploreIcon from "@material-ui/icons/Explore";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Drawer from "@material-ui/core/Drawer";


const styles = theme => ({
  drawer: {
    width: 320,
    flexShrink: 0
  },
  drawerPaper: {
    width: 320
  },
  list: {
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  },
  newChat: {
    position: "absolute",
    bottom: theme.spacing(11),
    right: theme.spacing(3),
  }
});


class SideBar extends React.Component {

  state = {
    activeTab: 0,
  };

  handleChangeActiveTab = (event, value) => {
    this.setState({
      ...this.state,
      activeTab: value,
    })
  };

  render() {
    const { classes } = this.props;
    const { activeTab } = this.state;

    return (
      <Drawer
        className={classes.drawer}
        variant="persistent" open
        classes={{paper: classes.drawerPaper}}>

        <Search />

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
          value={activeTab}
          onChange={this.handleChangeActiveTab}
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
    );
  }

}

export default withStyles(styles)(SideBar);