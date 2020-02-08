import React from "react";
import Avatar from "@material-ui/core/Avatar";
import titleInitials from "../utils/title-initial";
import getColor from "../utils/color-from";


export default function AvatarPerson({ sender }) {
  return (
    <Avatar style={{ background: getColor(sender) }}>
      { titleInitials(sender) }
    </Avatar>
  )
}