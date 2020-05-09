import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/index";

import "./PlantCard.css";

class PlantCard extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { currentUser, isLoggedIn } = context.state;
          return (
            <div className="plant-card">
              <img
                className="user-plant-image"
                src={require("../../Assets/Pathos.jpg")}
                alt="user-plant-image"
              />
              <ul className="plant-info">
                <li>Pathos</li>
                <li>Living Room</li>
                <li>1/4 Cup</li>
                <li>May 12th</li>
              </ul>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default PlantCard;
