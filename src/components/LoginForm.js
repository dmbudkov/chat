import React from "react";
import { withStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = () => ({
  form: {
    padding: 30,
  },
  input: {
    display: 'block',
    marginBottom: 20
  },
  button: {
    marginTop: 20,
  }
});

class LoginForm extends React.Component {

  state = {
    username: {
      value: '',
      valid: true
    },
    password: {
      value: '',
      valid: true
    }
  };

  handleChangeValue = (event) => {
    event.persist();
    this.setState((prevState) => ({
      [event.target.name]: {
        ...prevState[event.target.name],
        value: event.target.value
      }
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    console.log(username.value, password.value);
  };

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

    return (
      <form
        className={ classes.form }
        onSubmit={this.handleSubmit}
        autoComplete="off">

        <TextField required
                   fullWidth
                   className={classes.input}
                   label="Username"
                   placeholder="Type your name..."
                   name="username"
                   onChange={this.handleChangeValue}
                   value={username.value}
                   error={!username.valid}
        />
        <TextField required
                   type="password"
                   fullWidth
                   className={classes.input}
                   label="Password"
                   placeholder="Type your password..."
                   name="password"
                   onChange={this.handleChangeValue}
                   value={password.value}
                   error={!password.valid}
        />
        <Button className={classes.button}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
        >Login</Button>
      </form>
    )
  }
}


export default withStyles(styles)(LoginForm);