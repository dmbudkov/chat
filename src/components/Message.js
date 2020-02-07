import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
  listItem: {
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
  }
});

function Message ({ sender, content, classes }) {
  return (
  <ListItem className={
    sender !== "me"
      ? classes.listItem
      : classes.listItemRight}>
    <AvatarPerson sender={sender} />
    <Paper className={classes.card}>
      <Typography className={classes.name} gutterBottom>
        {sender}
      </Typography>
      <Typography variant="body2" component="p" gutterBottom>
        {content}
      </Typography>
    </Paper>
  </ListItem>
)}

export default withStyles(styles)(Message);