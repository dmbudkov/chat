import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import AvatarPerson from "./AvatarPerson";


function ChatListItem({ title, date }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <AvatarPerson sender={title} />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={date} />
    </ListItem>
  )
}

export default ChatListItem;