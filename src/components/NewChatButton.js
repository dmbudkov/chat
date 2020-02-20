import React from "react";
import { withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Modal from "../components/Modal";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";


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

function NewChatButton({ classes }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        className={classes.newChat}
        color="primary"
        onClick={handleOpen}
      >
        <AddIcon />
      </IconButton>

      <Modal open={open} handleClose={handleClose}>
        <Typography variant="h6" noWrap className={classes.title}>Create New Chat</Typography>
        <TextField required fullWidth name="create" label="Name" />
        <Button className={classes.button} color="primary">Create</Button>
      </Modal>
    </>
  )
}

export default withStyles(styles)(NewChatButton);