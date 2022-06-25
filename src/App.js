import React from "react";
import {Switch,Route} from "react-router-dom";
import Login from './Login';
import Logout from "./Logout";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Register from "./Register";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App=()=>{
  return(
    <>
    <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/login" component={Login}/>
        <Route exact path="/logout" component={Logout}/>
        <Route exact path="/aboutus" component={AboutUs}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    </>
  )
}
export default App;