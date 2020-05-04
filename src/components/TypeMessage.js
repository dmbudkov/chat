import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  input: {
    position: "absolute",
    bottom: theme.spacing(3),
    left: theme.spacing(3),
    right: theme.spacing(3)
  }
});

function TypeMessage({ classes, sendMessage, disabled }) {
  const [value, setValue] = useState('');

  const handleChangeValue = e => {
    e.persist();
    setValue(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !disabled) {
      sendMessage(value);
      setValue('');
    }
  };

  return (
    <Paper className={classes.input}>
      <Toolbar>
        <Input fullWidth
               autoComplete="off"
               placeholder="Введите сообщение..."
               value={value}
               onChange={handleChangeValue}
               onKeyDown={handleKeyDown}
               disabled={disabled}
        />
      </Toolbar>
    </Paper>
  );
}

TypeMessage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  sendMessage: PropTypes.func
};

export default withStyles(styles)(TypeMessage);