import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import context, { AuthContext } from "../../context/index";

import UploadedPic from "../UploadedPic/UploadedPic";

import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const {
            formSignup: { username, password, email, phoneNumber },
            errorMessage,
            successMessage,
            isLoggedIn,
          } = context.state;

          const { handleSignupInput, handleSignupSubmit } = context;
          return (
            <>
              {isLoggedIn ? (
                <Redirect to="/user-profile" />
              ) : (
                <div id="signup-page">
                  <div id="signup-box">
                    <div class="left">
                      <h1>Sign Up</h1>
                      <form
                        onSubmit={async (e) => {
                          e.preventDefault();
                          await handleSignupInput(e);
                          this.props.history.push("/user-profile");
                        }}
                      >
                        <label htmlFor="username">
                          Username:
                          <input
                            id="username"
                            name="username"
                            type="username"
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
                        <label htmlFor="phoneNumber">
                          Phone Number:
                          <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="phoneNumber"
                            value={phoneNumber}
                            //using submit instead of input becuase this is optional
                            onChange={handleSignupInput}
                          />
                        </label>

                        {/* <label htmlFor="avatar">
                          Profile Photo:
                          <UploadedPic />
                        </label> */}
                        <button type="submit">Submit</button>
                      </form>
                      <div class="right">
                        {/* <img src={require("../../Assets/SignUpPic.jpg")} /> */}
                      </div>
                      {/* {message && <div>{message}</div>} */}
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

//Make sure there are no css issues with input tags inside of lables.
//UploadedPic Component is now reuseable
export default SignUp;
