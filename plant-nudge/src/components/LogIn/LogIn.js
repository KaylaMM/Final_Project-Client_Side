import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
//might be able to remove the var context
import context, { AuthContext } from "../../context/index";

import "./LogIn.css";

class LogIn extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const {
            formLogin: { username, password },
            //not sure if these messages are needed
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
                  <h2>Log In</h2>
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

                    <a>
                      <Link to="/user-profile">Log In</Link>
                    </a>
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
