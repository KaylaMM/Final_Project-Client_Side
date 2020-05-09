import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
//might be able to remove the var context
import { AuthContext } from "../../context/index";

import "./LogIn.css";
import { requirePropFactory } from "@material-ui/core";

class LogIn extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const {
            formLogin: { username, password },
            //not sure if these messages are needed

            isLoggedIn,
          } = context.state;

          const { handleLoginInput, handleLoginSubmit } = context;
          return (
            <>
              {isLoggedIn ? (
                <Redirect to="/user-profile" />
              ) : (
                <div className="login-page">
                  <img
                    className="login-image"
                    src={require("../../Assets/LogIn.jpg")}
                    alt="page-styling"
                  />
                  <div id="login-container">
                    <div className="login-box">
                      <div className="login-text">
                        <h1>Log In</h1>
                        <form onSubmit={handleLoginSubmit}>
                          <label htmlFor="username">
                            Username:
                            <input
                              id="username"
                              name="username"
                              type="text"
                              value={username}
                              onChange={handleLoginInput}
                            />
                          </label>

                          <label htmlFor="password">
                            Password:
                            <input
                              id="password"
                              name="password"
                              type="password"
                              value={password}
                              onChange={handleLoginInput}
                            />
                          </label>

                          <button>
                            <Link className="link" to="/user-profile">
                              Log In
                            </Link>
                          </button>
                        </form>
                      </div>
                    </div>
                    {/* {message && <div>{message}</div>} */}
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

export default LogIn;
