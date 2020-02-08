import React from 'react';
import { withStyles } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import ChatHeader from "./ChatHeader";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";

const styles = () => ({
  root: {
    height: '100vh',
    backgroundColor: "#f5f5f5"
  },
  paper: {
    width: 500,
    margin: '30px auto'
  }
});

function WelcomePage({ classes }) {
  const [activeTabValue, setTabValue] = React.useState(0);

  const handleChangeActiveTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className={classes.root}>
      <ChatHeader marginLeft={0} />
      <Toolbar />

      <Paper elevation={1} className={classes.paper}>
        <AppBar position="static" color="default">
          <Tabs value={activeTabValue}
                variant="fullWidth"
                onChange={handleChangeActiveTab}>
            <Tab label="Login" icon={<PersonIcon />} />
            <Tab label="Sign up" icon={<PersonAddIcon />} />
          </Tabs>
        </AppBar>
        { activeTabValue === 0 && <LoginForm /> }
        { activeTabValue === 1 && <SignupForm /> }
      </Paper>
    </div>
  );
}

export default withStyles(styles)(WelcomePage);