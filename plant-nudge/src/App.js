import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route, Switch, BrowserRouter } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
// import AllUserPlants from "./components/AllUserPlants/AllUserPlants";
// import UserProfile from "./components/UserProfile/UserProfile";
// import "typeface-roboto";

import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import UserProfile from "./components/UserProfile/UserProfile";

import { AuthContext } from "./context/index";
import { ThemeProvider } from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyLoggedIn: null,
      //what does ready mean? Liek ready for new session?
      ready: false,
    };

    this.service = new AuthService();
  }

  getCurrentlyLoggedInUser = (f) => {
    this.service
      .currentUser()
      .then((theUser) => {
        this.setState({ currentlyLoggedIn: theUser }, () => {
          if (f) {
            f();
          }
        });
      })
      .catch(() => {
        this.setState({ currentlyLoggedIn: null });
      });
  };

  componentDidMount() {
    this.getCurrentlyLoggedInUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/user-profile" component={UserProfile} />
          </Switch>
        </BrowserRouter>
      </div>

      // =-=-=-=-=-=-=- NAV BAR CODE =-=-=-=-=-=-=-
      // <div style={{ height: "100%" }}>
      //   <NavBar />
      //   <main style={{ marginTop: "64px" }}>
      //     <UserProfile />
      //   </main>
      // </div>
      // =-=-=-=-=-=-=- NAV BAR CODE =-=-=-=-=-=-=-
    );
  }
}

export default App;
