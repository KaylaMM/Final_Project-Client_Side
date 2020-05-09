import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import "./Home.css";
import { AuthContext } from "../../context";

class Home extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { isLoggedIn } = context.state;
          return (
            <>
              {isLoggedIn ? (
                <Redirect to="/user-profile" />
              ) : (
                <div className="landing-page">
                  <img
                    alt="logo"
                    id="logo"
                    src={require("../../Assets/PlantNudgeLogo.jpg")}
                  />
                  <div className="welcome-container">
                    <div className="welcome-text">
                      <h3> Welcome to </h3>
                      <h1> Plant Nudge </h1>
                      <h3>
                        {" "}
                        an app to help you remember when to water your urban
                        oasis!
                      </h3>
                      <button className="button">
                        <Link className="link" to="/auth/login">
                          Log In
                        </Link>
                      </button>
                      <button className="button">
                        <Link className="link" to="/auth/signup">
                          Sign Up
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Home;
