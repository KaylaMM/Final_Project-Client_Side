import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import UserProfile from "./components/UserProfile/UserProfile";
import ProgressAlbum from "./components/ProgressAlbum/ProgressAlbum";

// import { AuthContext } from "./context/index";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/user-profile" component={UserProfile} />
        <Route exacr path="/progress-album" component={ProgressAlbum} />
      </Switch>
    </div>
  );
}

export default App;
