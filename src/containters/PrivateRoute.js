import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { recieveAuth } from "../actions";

class PrivateRoute extends React.Component{

  componentDidMount() {
    this.props.recieveAuth();
  }

  render() {
    const { children, isAuth, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => isAuth
          ? children
          : <Redirect to={{
                state: { from: props.location }
            }} />
        }
      />
    )
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = dispatch => bindActionCreators({
  recieveAuth
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute));