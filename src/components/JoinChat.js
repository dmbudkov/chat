import React from "react";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

const styles = (theme) => ({
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  notification: {
    width: '100px',
    height: 'auto',
    background: "#ffffff"
  },
  paper: {
    backgroundColor: "#fafafa",
    padding: theme.spacing(2, 4, 3),
    borderRadius: "2px"
  },
  title: {
    fontSize: "22px",
    marginBottom: "5px",
  },
  p: {
    fontSize: "16px",
    marginBottom: "35px",
  },
  button: {
    marginLeft: '30px'
  }
});

export function JoinChat ({ classes, joinChat }) {
  return (
    <div className={classes.wrap}>
      <div className={classes.paper}>
        <Typography className={classes.title}>Войдите в чат...</Typography>
        <Typography className={classes.p}>Вы пока не состоите в этом чате</Typography>
        <Button className={classes.button}
                onClick={joinChat}
                variant="contained"
                color="primary">
          Войти</Button>
      </div>
    </div>
  )
}

JoinChat.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  joinChat: PropTypes.func
};

export default withStyles(styles)(JoinChat);