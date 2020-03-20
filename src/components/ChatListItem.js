import React from "react";
import classNames from 'classnames';
import { withStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import AvatarPerson from "./AvatarPerson";
import StarIcon from "@material-ui/icons/Star";
import PropTypes from "prop-types";


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


function ChatListItem({ title, date, classes, setActiveChat, _id, activeId, isActive, isCreator, mountChat, unmountChat }) {

  const handleSetActive = () => {
    unmountChat(activeId);
    setActiveChat(_id);
    mountChat(_id);
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

ChatListItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  setActiveChat: PropTypes.func,
  _id: PropTypes.string,
  activeId: PropTypes.string,
  isActive: PropTypes.bool,
  isCreator: PropTypes.bool,
  mountChat: PropTypes.func,
  unmountChat: PropTypes.func
};

export default withStyles(styles)(ChatListItem);