import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlantCard from "../PlantCard/PlantCard";
import { AuthContext } from "../../context";

class AllPlants extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { currentUser, isLoggedIn } = context.state;
          return (
            <div className="all-plants">
              <h1> All my plants will go here </h1>
              <PlantCard />
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default AllPlants;
