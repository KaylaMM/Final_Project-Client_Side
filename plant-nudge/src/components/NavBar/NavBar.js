import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import plantNudgeLogo from "../../Assets/plantNudgeLogo.png";

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
        <button className="home-button">Home</button>
        <button className="logout-button">Log Out</button>
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
