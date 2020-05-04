import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";

export default function CharMenu ({ deleteChat, isMember, isCreator, joinChat, leaveChat, disabled }) {

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
        disabled={disabled}
      >
        <MoreVertIcon style={{ color: "white", opacity: disabled ? .5 : 1 }} />
      </IconButton>
      <Menu
        id="chat-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        { !isCreator && !isMember && <MenuItem onClick={handleJoinChat}>Войти в чат</MenuItem> }
        { !isCreator && isMember && <MenuItem onClick={handleLeaveChat}>Покинуть чат</MenuItem> }
        { isCreator && <MenuItem onClick={handleDeleteChat}>Удалить</MenuItem> }
      </Menu>
    </>
  )
}

CharMenu.propTypes = {
  deleteChat: PropTypes.func,
  isMember: PropTypes.bool,
  isCreator: PropTypes.bool,
  joinChat: PropTypes.func,
  leaveChat: PropTypes.func
};