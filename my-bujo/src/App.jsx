import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import Views
import First from "./Views/First";
import LogIn from './Views/LogIn';
import SingIn from './Views/SingIn';
import Home from "./Views/Home";



function RouterApp (){
  return(
    <BrowserRouter>
     <Switch>
     <Route exact path="/" component={First} />
     <Route path="/login" component={LogIn} />
     <Route path="/singin" component={SingIn} />
     <Route path="/home" component={Home} />
     </Switch>
    </BrowserRouter>
  );
}

export default RouterApp;

