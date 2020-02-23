import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import moment from 'moment';
import 'moment/locale/ru'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import AvatarPerson from "./AvatarPerson";


const styles = theme => ({
  card: {
    padding: 10,
    maxWidth: 275,
    minWidth: 85
  },
  name: {
    fontSize: 14,
    color: "#1c2863",
    fontWeight: "bold",
    marginBottom: 8
  },
  date: {
    color: "#cccccc",
    fontSize: 12,
    marginLeft: 10,
  },
  listItemLeft: {
    '& > *:first-child': {
      marginRight: theme.spacing(3),
    }
  },
  listItemRight: {
    flexDirection: "row-reverse",
    '& > *:last-child': {
      marginRight: theme.spacing(3),
      backgroundColor: "#e6dcff",
      '& span': {
        color: "#95949e",
      }
    }
  },
  listItemCenter: {
    justifyContent: 'center',
    '& > *:first-child': {
      display: 'none'
    },
    '& > *': {
      boxShadow: 'none',
      fontStyle: 'italic',
      backgroundColor: "#fafafa",
    },
    '& > * > *': {
      margin: '0 4px'
    },
    '& > * *': {
      display: 'inline',
      color: "#95949e",
      fontWeight: 'normal'
    }
  }
});

function Message ({ sender, content, createdAt, statusMessage, classes, user }) {

  const name = () => {
    if (sender.firstName && sender.lastName)
      return `${sender.firstName} ${sender.lastName}`;
    if (sender.firstName)
      return sender.firstName;
    return sender.username;
  };
  const time = moment(createdAt).locale('ru').calendar().toLowerCase();

  return (
    <ListItem className={classNames({
        [classes.listItemLeft]: sender._id !== user._id && !statusMessage,
        [classes.listItemRight]: sender._id === user._id && !statusMessage,
        [classes.listItemCenter]: statusMessage,
      })}>
      <AvatarPerson sender={name()} />
      <Paper className={classes.card}>
        <Typography className={classes.name} gutterBottom>
          {name()} <span className={classes.date}>{time}</span>
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {content}
        </Typography>
      </Paper>
    </ListItem>
)}

export default withStyles(styles)(Message);