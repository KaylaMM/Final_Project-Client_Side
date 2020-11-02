import React from "react";
import PlantCard from "../PlantCard/PlantCard";
import { AuthContext } from "../../context";

import "./AllPlants.css";

const AllPlants = () => {
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
};

export default AllPlants;
