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

export function EmptyChat ({ classes }) {
  return (
    <div className={classes.wrap}>
      <div className={classes.paper}>
        <Typography className={classes.title}>Начнинай общаться...</Typography>
        <Typography className={classes.p}>Используй <b>Все чаты</b> для обзора всех чатов</Typography>
        <Typography className={classes.p}>Используй <b>Мои чаты</b> для перехода в ваши чаты</Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(EmptyChat);