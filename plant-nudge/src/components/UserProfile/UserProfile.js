import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import NavBar from "../NavBar/NavBar";
import NewPlant from "../NewPlant/NewPlant";
import UploadedPic from "../UploadedPic/UploadedPic";
import context, { AuthContext } from "../../context";
import "./UserProfile.css";

// make api request to see if user has Avatar, if yes show in href to show it. if not, display default

class UserProfile extends Component {
  // componentDidMount() {
  //   console.log(this.context, "-=-=-=-=-=-=-=-=-=-=-=");
  //   if (!this.context.state.isLoggedIn) {
  //     return this.props.history.push("/signup");
  //   }
  //   this.props.updateState();
  // }
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { username } = context.state.currentUser;
          const { avatar } = this.props;
          return (
            <div className="user-profile">
              <NavBar />
              <header>
                <h1> Welcome {username} </h1>
              </header>
              <div>
                <image> {this.props.avatar} </image>
              </div>

              <NewPlant className="new-plant" />
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default UserProfile;
