import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import Views
import Home from "./Views/Home";
import LogIn from './Views/LogIn';
import Register from './Views/Register';
import Feed from "./Views/Feed";
import NewNote from "./Components/NewNote";



function RouterApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/register" component={Register} />
        <Route path="/feed" component={Feed} />
        <Route path="/notes" component={NewNote} />
      </Switch>
    </BrowserRouter>
  );
}

export default RouterApp;

