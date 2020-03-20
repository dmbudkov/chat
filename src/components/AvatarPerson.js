import React from "react";
import Avatar from "@material-ui/core/Avatar";
import titleInitials from "../utils/title-initial";
import getColor from "../utils/color-from";
import PropTypes from 'prop-types';


export default function AvatarPerson({ sender }) {
  return (
    <Avatar style={{ background: getColor(sender) }}>
      { titleInitials(sender) }
    </Avatar>
  )
}

AvatarPerson.propTypes = {
  sender: PropTypes.string,
};