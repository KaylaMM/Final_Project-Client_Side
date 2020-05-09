import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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

class UserProfile extends Component {
  state = {
    isNewPlantFormVisable: false,
  };

  updatePlant = (key) => {};

  togglePlantFormOn = () => {
    console.log("HELLO");
    this.setState((prevState) => ({
      ...prevState,
      isNewPlantFormVisable: true,
    }));
  };

  togglePlantFormOff = () => {
    this.setState((prevState) => ({
      ...prevState,
      isNewPlantFormVisable: false,
    }));
  };

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { currentUser, isLoggedIn } = context.state;
          return (
            <div>
              <div className="full-user-profile">
                {!isLoggedIn ? (
                  <Redirect to="/auth/login" />
                ) : (
                  <div className="user-profile">
                    <NavBar />
                    <div>
                      <img className="ironplanter" alt="user-photo" />
                    </div>
                    <div className="new-plant-card">
                      <NewPlant isDone={this.togglePlantFormOff} />
                      {/* add submit button */}
                    </div>
                  </div>
                )}
              </div>
              <AllPlants />
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default UserProfile;
