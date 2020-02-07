import React from "react";
import Avatar from "@material-ui/core/Avatar";
import titleInitials from "../utils/title-initial";


export default function AvatarPerson({ sender }) {
  return (
    <Avatar>
      {titleInitials(sender)}
    </Avatar>
  )
}