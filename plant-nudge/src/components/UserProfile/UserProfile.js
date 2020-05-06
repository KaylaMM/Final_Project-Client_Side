import React, { Component } from "react";

import "./UserProfile.css";
import NavBar from "../NavBar/NavBar";
import NewPlant from "../NewPlant/NewPlant";
import UploadedPic from "../UploadedPic/UploadedPic";
import { Avatar } from "@material-ui/core";

class UserProfile extends Component {
  render() {
    return (
      <div className="user-profile">
        <NavBar />
        {Avatar}
        <NewPlant className="new-plant" />
      </div>
    );
  }
}

export default UserProfile;
