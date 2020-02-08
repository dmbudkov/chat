import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ChatPage from "./ChatPage";
import WelcomePage from "./WelcomePage";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/chat" exact>
          <ChatPage />
        </Route>
        <Route path="/welcome" exact>
          <WelcomePage />
        </Route>
        <Redirect to="/welcome" />
      </Switch>
    </Router>
  )
};


export default App;