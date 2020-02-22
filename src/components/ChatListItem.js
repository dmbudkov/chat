import React from "react";
import classNames from 'classnames';
import { withStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import AvatarPerson from "./AvatarPerson";


const styles = {
  list: {
    cursor: "pointer"
  },
  listActive: {
    backgroundColor: "#f2f2f2"
  }
};


function ChatListItem({ title, date, classes, setActiveChat, _id, isActive }) {

  const handleSetActive = () => {
    setActiveChat(_id);
  };

  return (
    <ListItem className={classNames(classes.list, { [classes.listActive]: isActive })}
              onClick={handleSetActive}>
      <ListItemAvatar>
        <AvatarPerson sender={title} />
      </ListItemAvatar>
      <ListItemText primary={title}
                    secondary={date} />
    </ListItem>
  )
}

export default withStyles(styles)(ChatListItem);