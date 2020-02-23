import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  input: {
    position: "absolute",
    bottom: theme.spacing(3),
    left: theme.spacing(3),
    right: theme.spacing(3)
  }
});

function TypeMessage({ classes, sendMessage }) {
  const [value, setValue] = useState('');

  const handleChangeValue = e => {
    e.persist();
    setValue(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      sendMessage(value);
      setValue('');
    }
  };

  return (
    <Paper className={classes.input}>
      <Toolbar>
        <Input fullWidth
               autoComplete="off"
               id="standard-required"
               placeholder="Type your message..."
               value={value}
               onChange={handleChangeValue}
               onKeyDown={handleKeyDown}
        />
      </Toolbar>
    </Paper>
  );
}

export default withStyles(styles)(TypeMessage);