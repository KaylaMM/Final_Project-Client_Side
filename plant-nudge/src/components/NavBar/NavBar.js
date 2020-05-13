import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import plantNudgeLogo from "../../Assets/PlantNudgeLogo.jpg";
// import { Redirect } from "react-router-dom";

import "./NavBar.css";
import { AuthContext } from "../../context";

// const homeButton = (props) => <button></button>;

class NavBar extends Component {
  state = {
    userLoggedIn: true,
  };

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { handleLogout } = context;
          return (
            <div>
              <header className="toolbar">
                <nav position="static" className="navbar">
                  <div className="navbar_logodiv">
                    <img
                      className="navbar_logo"
                      src={plantNudgeLogo}
                      alt="icon"
                    />
                    <div className="spacer" />
                    <Typography className="navbar_appname" varient="title">
                      Plant Nudge
                    </Typography>
                  </div>
                  <div className="logout-button">
                    <button onClick={handleLogout}>Log Out</button>
                  </div>
                </nav>
              </header>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default NavBar;
