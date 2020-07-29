import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import moment from 'moment';
import 'moment/locale/ru'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import AvatarPerson from "./AvatarPerson";
import getUserName from "../utils/get-user-name";
import PropTypes from "prop-types";


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
    cursor: 'default',
    '& > *:first-child': {
      display: 'none'
    },
    '& > *': {
      boxShadow: 'none',
      fontStyle: 'italic',
      backgroundColor: "#fafafa",
      '& > *:first-child': {
        fontWeight: 'bold',
        color: '#3f51b5'
      },
    },
    '& > * *': {
      display: 'inline',
      color: "#95949e",
      fontWeight: 'normal',
      fontSize: "13px",
      margin: '0'
    }
  }
});

function Message ({ sender, content, createdAt, statusMessage, classes, user }) {

  const time = moment(createdAt).locale('ru').calendar().toLowerCase();

  return (
    <ListItem className={classNames({
        [classes.listItemLeft]: sender._id !== user._id && !statusMessage,
        [classes.listItemRight]: sender._id === user._id && !statusMessage,
        [classes.listItemCenter]: statusMessage,
      })}>
      <AvatarPerson sender={getUserName(sender)} />
      <Paper className={classes.card}>
        <Typography className={classes.name} gutterBottom>
          {getUserName()} <span className={classes.date}>{time}</span>
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {content}
        </Typography>
      </Paper>
    </ListItem>
)}

Message.propTypes = {
  sender: PropTypes.object,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  statusMessage: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  user: PropTypes.object
};

export default withStyles(styles)(Message);