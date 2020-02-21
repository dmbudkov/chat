import React from "react";
import { withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Modal from "../components/Modal";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  icon: {
    color: "white"
  },
  title: {
    marginBottom: '20px',
  },
  field: {
    marginBottom: '20px',
    width: '300px',
    display: 'block'
  },
  button: {
    marginRight: '10px',
  }
};

export function UserMenu ({ classes, logout }) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => {
    setOpen(true);
    handleClose();
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  return (
    <>
      <IconButton
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <PersonPinIcon className={classes.icon} />
      </IconButton>

      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpenModal}>Edit Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

      <Modal open={open} handleClose={handleCloseModal}>
        <Typography variant="h6" noWrap className={classes.title}>Edit profile</Typography>
        <TextField className={classes.field} required fullWidth name="username" label="Username" />
        <TextField className={classes.field} fullWidth name="First name" label="First name" />
        <TextField className={classes.field} fullWidth name="Last name" label="Last name" />
        <Button className={classes.button} color="primary">Save</Button>
        <Button className={classes.button} onClick={handleCloseModal}>Close</Button>
      </Modal>
    </>
  )
}

export default withStyles(styles)(UserMenu);