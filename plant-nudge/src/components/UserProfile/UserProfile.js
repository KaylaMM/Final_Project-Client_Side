import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./UserProfile.css";
import NavBar from "../NavBar/NavBar";
import NewPlant from "../NewPlant/NewPlant";
import PlantToggle from "../PlantToggle/PlantToggle";
import UploadedPic from "../UploadedPic/UploadedPic";
import context, { AuthContext } from "../../context";
import "./UserProfile.css";

// make api request to see if user has Avatar, if yes show in href to show it. if not, display default

class UserProfile extends Component {
  state = {
    isNewPlantFormVisable: false,
  };

  updatePlant = (key) => {};

  togglePlantFormOn = () => {
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
            <>
              {!isLoggedIn ? (
                <Redirect to="/login" />
              ) : (
                <div className="user-profile">
                  <NavBar />
                  <div>
                    <PlantToggle
                      userLoggedIn={currentUser}
                      passedDownTogglePlantForm={() => this.togglePlantFormOn()}
                      passedDownUpdatePlantSelector={(key) =>
                        this.updatePlant(key)
                      }
                    />
                    <div className="new-plant-card">
                      {this.state.isNewPlantFormVisable ? (
                        <NewPlant isDone={this.togglePlantFormOff} />
                      ) : (
                        <>
                          <button
                            id="add-another-plant"
                            onClick={() => this.togglePlantFormOn}
                          >
                            <span> Add New Plant </span>
                          </button>
                        </>
                      )}
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

export default UserProfile;
