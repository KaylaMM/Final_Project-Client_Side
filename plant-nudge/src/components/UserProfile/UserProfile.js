import React from "react";
import { Redirect } from "react-router-dom";
import "./UserProfile.css";
import NavBar from "../NavBar/NavBar";
import NewPlant from "../NewPlant/NewPlant";
import AllPlants from "../AllPlants/AllPlants";

import { AuthContext } from "../../context/index";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { isLoggedIn } = context.state;
        return (
          <div>
            <div className="full-user-profile">
              {isLoggedIn ? (
                <Redirect to="/auth/login" />
              ) : (
                <div classNAme="user-profile">
                  <NavBar />
                  <div>
                    <img
                      className="ironplanter"
                      src={require("../../Assets/UserProfilePic.jpg")}
                      alt="user-avatar"
                    />
                  </div>
                  <div className="new-plant-card">
                    <NewPlant />
                  </div>
                </div>
              )}
            </div>
            <h1 className="all-plants-header"> Check out your Urban Oasis </h1>
            <AllPlants />
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};
export default UserProfile;
