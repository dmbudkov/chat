import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class ErrorMessage extends React.Component {
  static propTypes = {
    error: PropTypes.instanceOf(Error),
  };

  state = {
    open: !!this.props.error
  };

  handleClose = () => {
    this.setState({open: false})
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.error) {
      this.setState({open: true});
    }
  }

  render() {
    const { error } = this.props;
    if(!error) {
      return null;
    }

    return (
      <Snackbar open={this.state.open} autoHideDuration={5000} onClose={this.handleClose}>
        <Alert onClose={this.handleClose} severity="warning">
          {error.message}
        </Alert>
      </Snackbar>
    );
  }
}