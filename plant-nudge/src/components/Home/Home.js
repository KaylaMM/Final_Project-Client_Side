import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
// import { AuthContext } from "../../context/

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h3> WELCOME TO </h3>
        <h1> Plant Nudge </h1>
        <h3> and app to help you remember when to water your urban oasis!</h3>
        <button> Log In </button>
        <button> Sign Up </button>
      </div>
    );
  }
}

export default Home;
