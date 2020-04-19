import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import plantNudgeLogo from "../../Assets/plantNudgeLogo.png";

import "./NavBar.css";

console.log(plantNudgeLogo);

class NavBar extends React.Component {
  render() {
    return (
      <header className="toolbar">
        <nav position="static" className="navbar">
          <div className="navbar_logodiv">
            <img className="navbar_logo" src={plantNudgeLogo} alt="logo" />
            <Typography className="navbar_appname" varient="title">
              Plant Nudge
            </Typography>
            <div className="toolbar_buttons">
              <button>Log Out</button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
