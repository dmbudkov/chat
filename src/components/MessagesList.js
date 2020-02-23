import React from 'react';
import { withStyles } from "@material-ui/core";
import Message from "./Message";
import List from "@material-ui/core/List";

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
      <List className={classes.messages} ref={this.messages}>
        {messages && messages.map((message, index) => (
          <Message {...message}
                   key={index}
                   user={user}
          />
        ))}
      </List>
    )
  }
}

export default withStyles(styles)(MessagesList);