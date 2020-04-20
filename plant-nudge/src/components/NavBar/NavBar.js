import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import plantNudgeLogo from "../../Assets/plantNudgeLogo.png";

import "./NavBar.css";

console.log(plantNudgeLogo);

const homeButton = (props) => <button></button>;

class NavBar extends React.Component {
  render() {
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
          <div className="toolbar_buttons">
            <button>Home</button>
            <button>Log Out</button>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
