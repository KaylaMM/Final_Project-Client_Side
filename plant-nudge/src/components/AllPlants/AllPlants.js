import React, { useState, useEffect } from "react";
import PlantCard from "../PlantCard/PlantCard";
import { AuthContext } from "../../context";
import axios from "axios";

import "./AllPlants.css";

const DEFAULT_PLANT = {
  plant: "",
  location: "",
  waterNeeded: "",
};

const AllPlants = () => {
  const [plantInfo, setPlantInfo] = useState(DEFAULT_PLANT)

useEffect(() => {
  async function getPlants() {
    const response = await axios.get(`userPlants/allPlants/${plantInfo}/`);
    setPlantInfo(response.data)
  }
  getPlants()
}, [plantInfo])

  return (
    <div className="all-plants">
      <PlantCard />
    </div>
  );
};

export default AllPlants;
