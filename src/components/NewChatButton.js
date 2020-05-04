import React from "react";
import { withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Modal from "../components/Modal";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";


const styles = theme => ({
  newChat: {
    position: "absolute",
    bottom: theme.spacing(11),
    right: theme.spacing(3),
  },
  button: {
    marginTop: "20px",
  },
  title: {
    marginBottom: "20px",
  }
});

function NewChatButton({ classes, createChat, disabled }) {

  const [open, setOpen] = React.useState(false);
  const [chatName, setChatName] = React.useState({
    value: '',
    valid: true
  });
  const handleOpen = () => {
    setOpen(true);
    setChatName({
      ...chatName,
      value: '',
    });
  };
  const handleClose = () => { setOpen(false) };

  const handleChangeValue = (event) => {
    event.persist();
    setChatName({
      ...chatName,
      value: event.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createChat(chatName.value);
    handleClose();
  };

  return (
    <>
      <IconButton
        className={classes.newChat}
        color="primary"
        onClick={handleOpen}
        disabled={disabled}
      >
        <AddIcon />
      </IconButton>

      <Modal open={open} handleClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6"
                      noWrap
                      className={classes.title}
          >Создать новый чат</Typography>
          <TextField required
                     fullWidth
                     autoComplete='off'
                     name="title"
                     label="Название"
                     onChange={handleChangeValue}
                     value={chatName.value}
          />
          <Button className={classes.button}
                  color="primary"
                  type="submit"
          >Создать</Button>
        </form>
      </Modal>
    </>
  )
}

NewChatButton.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  createChat: PropTypes.func
};

export default withStyles(styles)(NewChatButton);