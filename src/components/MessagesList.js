import React from 'react';
import { withStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import Message from "./Message";
import FirstMessage from "./FirstMessage";
import PropTypes from "prop-types";

const styles = theme => ({
  messages: {
    padding: `0 ${theme.spacing(3)}px`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(14),
    overflowY: 'scroll'
  }
});

class MessagesList extends React.Component {

  constructor(props) {
    super(props);
    this.messages = React.createRef();
    this.getMessages = this.props.getMessages;
  }

  scrollDown() {
    const node = this.messages.current;
    if(node) {
      node.scrollTop = node.scrollHeight;
    }
  }

  componentDidUpdate() {
    this.scrollDown();
  }
  componentDidMount() {
    this.getMessages();
    this.scrollDown();
  }

  render() {
    const { classes, messages, user } = this.props;

    return (
     messages.length !== 0 ? <List className={classes.messages} ref={this.messages}>
        {messages && messages.map((message, index) => (
          <Message {...message}
                   key={index}
                   user={user}
          />
        ))}
      </List> : <FirstMessage />
    )
  }
}

MessagesList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  messages: PropTypes.array,
  user: PropTypes.object
};

export default withStyles(styles)(MessagesList);