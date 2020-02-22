import React from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";
import ChatPage from "../containters/ChatPage";
import WelcomePage from "../containters/WelcomePage";
import PrivateRoute from "../containters/PrivateRoute";
import history from "../utils/history";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/chat" exact>
          <ChatPage />
        </PrivateRoute>
        <Route path="/chat/:id" exact>
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