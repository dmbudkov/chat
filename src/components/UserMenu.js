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

export function UserMenu ({ classes, logout, user, editUser }) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [firstName, setFirstname] = React.useState("");
  const [lastName, setLastname] = React.useState("");

  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleCloseModal = () => setOpen(false);
  const handleChangeUserName = e => setUsername(e.target.value);
  const handleChangeFirstName = e => setFirstname(e.target.value);
  const handleChangeLastName = e => setLastname(e.target.value);

  const handleOpenModal = () => {
    setOpen(true);
    setUsername(user.username);
    setFirstname(user.firstName);
    setLastname(user.lastName);
    handleClose();
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const handleSubmit = e => {
    e.preventDefault();
    editUser({ username, firstName, lastName });
    handleCloseModal();
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
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpenModal}>Редактировать</MenuItem>
        <MenuItem onClick={handleLogout}>Выйти</MenuItem>
      </Menu>

      <Modal open={open} handleClose={handleCloseModal}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6"
                      noWrap
                      className={classes.title}>Редактировать профиль</Typography>
          <TextField autoComplete="off"
                     value={username}
                     onChange={handleChangeUserName}
                     className={classes.field}
                     required
                     fullWidth
                     name="username"
                     label="Логин"
          />
          <TextField autoComplete="off"
                     value={firstName}
                     onChange={handleChangeFirstName}
                     className={classes.field}
                     fullWidth
                     name="firstname"
                     label="Имя"
          />
          <TextField autoComplete="off"
                     className={classes.field}
                     value={lastName}
                     onChange={handleChangeLastName}
                     fullWidth
                     name="lastname"
                     label="Фамилия"
          />
          <Button className={classes.button}
                  type="submit"
                  color="primary"
          >Сохранить</Button>
          <Button className={classes.button}
                  onClick={handleCloseModal}
          >Закрыть</Button>
        </form>
      </Modal>
    </>
  )
}

export default withStyles(styles)(UserMenu);