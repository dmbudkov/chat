import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
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
    fontSize: 15,
    marginBottom: 8
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
      backgroundColor: "#e6dcff"
    }
  },
  listItemCenter: {
    justifyContent: 'center',
    '& > *:first-child': {
      display: 'none',
    },
    '& > *': {
      boxShadow: 'none',
      fontStyle: 'italic'
    },
    '& > * *': {
      display: 'inline'
    }
  }
});

function Message ({ sender, content, statusMessage, classes, user }) {

  const name = () => {
    if (sender.firstName && sender.lastName)
      return `${sender.firstName} ${sender.lastName}`;
    if (sender.firstName)
      return sender.firstName;
    return sender.username;
  };

  return (
    <ListItem className={classNames({
        [classes.listItemLeft]: sender._id !== user._id && !statusMessage,
        [classes.listItemRight]: sender._id === user._id && !statusMessage,
        [classes.listItemCenter]: statusMessage,
      })}>
      <AvatarPerson sender={name()} />
      <Paper className={classes.card}>
        <Typography className={classes.name} gutterBottom>
          {name()}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {content}
        </Typography>
      </Paper>
    </ListItem>
)}

export default withStyles(styles)(Message);