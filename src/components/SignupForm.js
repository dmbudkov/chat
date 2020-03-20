import React from "react";
import { withStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

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

class SignupForm extends React.Component {

  state = {
    username: {
      value: '',
      valid: true
    },
    password: {
      value: '',
      valid: true
    },
    passwordRepeat: {
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
    const { username, password, passwordRepeat } = this.state;

    if (password.value !== passwordRepeat.value) {
      this.setState((prevState) => ({
        passwordRepeat: {
          ...prevState.passwordRepeat,
          valid: false
        }
      }));
      return;
    }

    this.props.onSubmit(username.value, password.value);
  };

  render() {
    const { classes } = this.props;
    const { username, password, passwordRepeat } = this.state;

    return (
      <form
        className={ classes.form }
        onSubmit={this.handleSubmit}
        autoComplete="off">

        <TextField required
                   type="text"
                   fullWidth
                   autoComplete='off'
                   className={classes.input}
                   label="Логин"
                   placeholder="Введите ваш логин..."
                   name="username"
                   onChange={this.handleChangeValue}
                   value={username.value}
                   error={!username.valid}
        />
        <TextField required
                   type="password"
                   fullWidth
                   autoComplete='off'
                   className={classes.input}
                   label="Пароль"
                   placeholder="Введите ваш пароль..."
                   name="password"
                   onChange={this.handleChangeValue}
                   value={password.value}
                   error={!password.valid}
        />
        <TextField required
                   type="password"
                   fullWidth
                   autoComplete='off'
                   className={classes.input}
                   label="Повторите пароль"
                   placeholder="Ваш пароль снова..."
                   name="passwordRepeat"
                   onChange={this.handleChangeValue}
                   value={passwordRepeat.value}
                   error={!passwordRepeat.valid}
        />
        <Button className={classes.button}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
        >Ок</Button>
      </form>
    )
  }
}

SignupForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(SignupForm);