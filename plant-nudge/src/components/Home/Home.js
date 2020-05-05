import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="landing-page">
        <img id="logo" src="../../Assets/PlantNudgeLogo.png" />
        <h3> WELCOME TO </h3>
        <h1> Plant Nudge </h1>
        <h3> and app to help you remember when to water your urban oasis!</h3>
        <button>
          <a>
            <Link to="/login">Log In</Link>
          </a>
        </button>
        <button>
          <a>
            <Link to="/signup">Sign Up</Link>
          </a>
        </button>
      </div>
    );
  }
}

export default Home;
