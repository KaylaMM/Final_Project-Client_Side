import React, { Component } from "react";

import "./UserProfile.css";
import NavBar from "../NavBar/NavBar";
import NewPlant from "../NewPlant/NewPlant";

class UserProfile extends Component {
  render() {
    return (
      <div className="user-profile">
        {/* <NavBar /> */}
        <NewPlant />
      </div>
    );
  }
}

export default UserProfile;
