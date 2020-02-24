import React from "react";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

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
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "4px"
  },
  title: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  p: {
    fontSize: "11px"
  }
});

export function FirstMessage ({ classes }) {
  return (
    <div className={classes.wrap}>
      <div className={classes.paper}>
        <Typography className={classes.title}>Пока нет сообщений...</Typography>
        <Typography className={classes.p}>Отправь своё первое сообщение</Typography>
        <Typography className={classes.p}>Используй <b>Enter</b> для отправки</Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(FirstMessage);