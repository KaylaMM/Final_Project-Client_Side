import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import context, { AuthContext } from "../../context/index";

import NavBar from "../NavBar/NavBar";

import "./LogIn.css";

class LogIn extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const {
            formLogin: { username, password },
            errorMessage,
            successMessage,
            isLoggedIn,
          } = context.state;

          const { handleLoginInput, handleLoginSubmit } = context;
          return (
            <>
              {isLoggedIn ? (
                <Redirect to="/user-profile" />
              ) : (
                <>
                  <NavBar />
                  <h2>Log In</h2>
                  <form onSubmit={handleLoginInput}>
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
                    <label htmlFor="email">
                      Email:
                      <input
                        id="email"
                        name="email"
                        type="email"
                        // value={email}
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
                    <button>Sign Up</button>
                  </form>
                  {/* {message && <div>{message}</div>} */}
                </>
              )}
            </>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default LogIn;
