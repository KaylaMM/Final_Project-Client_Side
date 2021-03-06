import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";
import UploadedPic from "../UploadedPic/UploadedPic"

import "./SignUp.css";


const SignUp = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const {
          formSignup: { username, password, email, phoneNumber },
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
                  <div>
                    <h1>Sign Up</h1>
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        await handleSignupSubmit(e);
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

                      <label htmlFor="avatar">
                          Profile Photo:
                          <UploadedPic />
                        </label>

                      <button
                        className="signin-submit"
                        type="submit"
                        onChange={handleSignupSubmit}
                      >
                        Submit
                      </button>
                    </form>
                    <div>
                      <img src={require("../../Assets/SignUpPic.jpg")} />
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
};

export default SignUp;
