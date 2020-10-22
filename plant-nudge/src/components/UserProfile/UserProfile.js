import React from "react";
// import { Redirect } from "react-router-dom";
import "./UserProfile.css";
import NavBar from "../NavBar/NavBar";
import NewPlant from "../NewPlant/NewPlant";
// import PlantToggle from "../PlantToggle/PlantToggle";
// import UploadedPic from "../UploadedPic/UploadedPic";
import AllPlants from "../AllPlants/AllPlants";

import { AuthContext } from "../../context";
import "./UserProfile.css";
// import PlantCard from "../PlantCard/PlantCard";

// make api request to see if user has Avatar, if yes show in href to show it. if not, display default

const UserProfile = () => {
  return (
    <AuthContext.Consumer>
      <div>
        <div className="full-user-profile">
          <div className="user-profile">
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
        </div>
        <h1 className="all-plants-header"> Check out your Urban Oasis! </h1>
        <AllPlants />
      </div>
    </AuthContext.Consumer>
  );
};

export default UserProfile;
