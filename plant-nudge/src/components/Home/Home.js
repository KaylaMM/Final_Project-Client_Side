import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="landing-page">
        <img id="logo" src={require("../../Assets/PlantNudgeLogo.jpg")} />
        <div className="welcome-container">
          <div className="welcome-text">
            <h3> Welcome to </h3>
            <h1> Plant Nudge </h1>
            <h3>
              {" "}
              an app to help you remember when to water your urban oasis!
            </h3>
            <button className="button">
              <Link className="link" to="/login">
                Log In
              </Link>
            </button>
            <button className="button">
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
