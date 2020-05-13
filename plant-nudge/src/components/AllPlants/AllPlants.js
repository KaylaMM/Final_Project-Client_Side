import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PlantCard from "../PlantCard/PlantCard";
import { AuthContext } from "../../context";

import "./AllPlants.css";

class AllPlants extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { currentUser, isLoggedIn } = context.state;
          return (
            <div className="all-plants">
              <PlantCard />
              <PlantCard />
              <PlantCard />
              <PlantCard />
              <PlantCard />
              <PlantCard />
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default AllPlants;
