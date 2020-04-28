import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import plantNudgeLogo from "../../Assets/PlantNudgeLogo.png";
import { Redirect, Link } from "react-router-dom";

import "./NavBar.css";

// const homeButton = (props) => <button></button>;

class NavBar extends React.Component {
  state = {
    userLoggedIn: true,
  };

  logoutToggleClickHandler = () => {
    this.setState((prevState) => {
      return { userLoggedIn: !prevState.userLoggedIn };
    });
  };

  render() {
    const userNavButtons = this.state.userLoggedIn ? (
      <div className="toolbar_buttons">
        <a className="home-button">
          <Link to="/user-profile">Home</Link>
        </a>
        <a className="logout-button">
          <Link to="/">Log Out</Link>
        </a>
      </div>
    ) : null;

    return (
      <header className="toolbar">
        <nav position="static" className="navbar">
          <div className="navbar_logodiv">
            <img className="navbar_logo" src={plantNudgeLogo} alt="logo" />
            <div className="spacer" />
            <Typography className="navbar_appname" varient="title">
              Plant Nudge
            </Typography>
          </div>
          {userNavButtons}
        </nav>
      </header>
    );
  }
}

export default NavBar;
