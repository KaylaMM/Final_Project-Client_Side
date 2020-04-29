import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import context, { AuthContext } from "../../context/index";

import NavBar from "../NavBar/NavBar";
import UploadedPic from "../UploadedPic/UploadedPic";

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
                        // value={username}
                        onChange={handleSignupInput}
                      />
                    </label>
                    <label htmlFor="email">
                      Email:
                      <input
                        id="email"
                        name="email"
                        type="email"
                        // value={email}
                        onChange={handleSignupInput}
                      />
                    </label>
                    <label htmlFor="password">
                      Password:
                      <input
                        id="password"
                        name="password"
                        type="password"
                        // value={password}
                        onChange={handleSignupInput}
                      />
                    </label>
                    <label htmlFor="phoneNumber">
                      Phone Number:
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="phoneNumber"
                        // value={phoneNumber}
                        //using submit instead of input becuase this is optional
                        onChange={handleSignupSubmit}
                      />
                    </label>

                    <label htmlFor="avatar">
                      Profile Photo:
                      <UploadedPic />
                    </label>
                    <a>
                      <Link to="/user-profile">Submit</Link>
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

//Make sure there are no css issues with input tags inside of lables.
//UploadedPic Component is now reuseable
export default SignUp;
