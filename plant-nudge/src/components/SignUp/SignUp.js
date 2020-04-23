import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import context, { AuthContext } from "../../context/index";

import NavBar from "../NavBar/NavBar";

import "./SignUp";

class SignUp extends Component {
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

          const { handleSignupInput, handleSignupSubmit } = context;
          return (
            <>
              {isLoggedIn ? (
                <Redirect to="/signup" />
              ) : (
                <>
                  <NavBar />
                  <h2>Sign Up</h2>
                  <form onSubmit={handleSignupInput}>
                    <label htmlFor="username">
                      Username:
                      <input
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={handleSignupInput}
                      />
                    </label>
                    <label htmlFor="email">
                      Email:
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleSignupInput}
                      />
                    </label>
                    <label htmlFor="password">
                      Password:
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleSignupInput}
                      />
                    </label>
                    <button>Sign Up</button>
                  </form>
                  {message && <div>{message}</div>}
                </>
              )}
            </>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default SignUp;
