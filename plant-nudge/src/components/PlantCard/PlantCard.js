import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/index";

import "./PlantCard.css";

const PlantCard = () => {
  return (
    <div className="plant-card">
      <img
        className="user-plant-image"
        src={require("../../Assets/Pathos.jpg")}
        alt="user-plant"
      />
      <ul className="plant-info">
        <li>Pathos</li>
        <li>Living Room</li>
        <li>1/4 Cup</li>
        <li>May 12th</li>
      </ul>
    </div>
  
  );
};

export default PlantCard;
