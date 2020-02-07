import React from "react";
import { withStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import titleInitials from "../utils/title-initial";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";


const styles = {
  list: {
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  }
};

function ChatList({ classes, chats }) {
  return (
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
  )
}

export default withStyles(styles)(ChatList)