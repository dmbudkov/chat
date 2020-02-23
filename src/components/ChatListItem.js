import React from "react";
import classNames from 'classnames';
import { withStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import AvatarPerson from "./AvatarPerson";
import StarIcon from "@material-ui/icons/Star";


const styles = {
  list: {
    cursor: "pointer"
  },
  listActive: {
    backgroundColor: "#f2f2f2"
  },
  star: {
    color: "#3f51b5",
    opacity: '.15'
  }
};


function ChatListItem({ title, date, classes, setActiveChat, _id, isActive, isCreator }) {

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
      { isCreator && <StarIcon className={classes.star} /> }
    </ListItem>
  )
}

export default withStyles(styles)(ChatListItem);