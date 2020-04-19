import React, { Component } from "react";
import plantNudgeLogo from "../../../public/plantNudgeLogo.png";

console.log(plantNudgeLogo);

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <div>
          <img src={plantNudgeLogo} />
        </div>
      </nav>
    );
  }
}

export default NavBar;
