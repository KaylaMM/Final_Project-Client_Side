import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <img src=""></img>
        <h3> WELCOME TO </h3>
        <h1> Plant Nudge </h1>
        <h3> and app to help you remember when to water your urban oasis!</h3>
        <button>
          <a> Log In </a>
        </button>
        <button>
          <a> Sign Up </a>
        </button>
      </div>
    );
  }
}

export default Home;
