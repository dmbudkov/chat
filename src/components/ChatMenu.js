import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function ({ deleteChat, isMember, isCreator, joinChat, leaveChat }) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteChat = () => {
    deleteChat();
    handleClose();
  };
  const handleJoinChat = () => {
    joinChat();
    handleClose();
  };
  const handleLeaveChat = () => {
    leaveChat();
    handleClose();
  };

  return (
    <>
      <IconButton
        aria-controls="chat-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon style={{ color: "white" }} />
      </IconButton>
      <Menu
        id="chat-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        { !isCreator && !isMember && <MenuItem onClick={handleJoinChat}>Join chat</MenuItem> }
        { !isCreator && isMember && <MenuItem onClick={handleLeaveChat}>Leave chat</MenuItem> }
        { isCreator && <MenuItem onClick={handleDeleteChat}>Delete</MenuItem> }
      </Menu>
    </>
  )
}