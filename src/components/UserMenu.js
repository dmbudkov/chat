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
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpenModal}>Редактировать</MenuItem>
        <MenuItem onClick={handleLogout}>Выйти</MenuItem>
      </Menu>

      <Modal open={open} handleClose={handleCloseModal}>
        <Typography variant="h6" noWrap className={classes.title}>Редактировать профиль</Typography>
        <TextField autoComplete="off" className={classes.field} required fullWidth name="username" label="Имя пользователя" />
        <TextField autoComplete="off" className={classes.field} fullWidth name="firstname" label="Имя" />
        <TextField autoComplete="off" className={classes.field} fullWidth name="lastname" label="Фамилия" />
        <Button className={classes.button} color="primary">Сохранить</Button>
        <Button className={classes.button} onClick={handleCloseModal}>Закрыть</Button>
      </Modal>
    </>
  )
}

export default withStyles(styles)(UserMenu);