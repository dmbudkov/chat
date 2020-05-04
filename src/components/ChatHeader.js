import React from "react";
import { withStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import ChatMenu from "./ChatMenu";
import UserMenu from "./UserMenu";
import PropTypes from 'prop-types';

const styles = () => ({
  appBar: {
    position: "fixed",
  },
  toolbar: {
    justifyContent: "space-between"
  },
  wrapper: {
    display: "flex",
    alignItems: "center"
  },
  title: {
    marginRight: "10px",
    maxWidth: "300px",
  }
});

function ChatHeader({ classes, title, marginLeft = 320, logout, deleteChat, isAuth, isMember,
                      isCreator, joinChat, leaveChat, user, editUser, isConnected }) {
  return (
    <AppBar className={classes.appBar}
            style={{
              width: `calc(100% - ${marginLeft}px)`,
              marginLeft
            }}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.wrapper}>
          <Typography className={classes.title} variant="h6" noWrap>{title}</Typography>
          { title && <ChatMenu deleteChat={deleteChat}
                               isMember={isMember}
                               isCreator={isCreator}
                               joinChat={joinChat}
                               leaveChat={leaveChat}
                               disabled={!isConnected}
            /> }
        </div>
        { isAuth && <UserMenu logout={logout}
                              user={user}
                              editUser={editUser}
                              disabled={!isConnected}
          /> }
      </Toolbar>
    </AppBar>
  );
}

ChatHeader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string,
  marginLeft: PropTypes.number,
  logout: PropTypes.func,
  deleteChat: PropTypes.func,
  isAuth: PropTypes.bool,
  isMember: PropTypes.bool,
  isCreator: PropTypes.bool,
  joinChat: PropTypes.func,
  leaveChat: PropTypes.func,
  user: PropTypes.object,
  editUser: PropTypes.func,
};

export default withStyles(styles)(ChatHeader);