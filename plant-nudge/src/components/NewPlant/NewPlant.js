import React, { useState } from "react";
import "./NewPlant.css";
import { AuthContext } from "../../context";

const DEFAULT_PLANT = {
  plant: "",
  location: "",
  waterNeeded: 0,
};

const NewPlant = () => {
  const [plantInfo, setPlantInfo] = useState(DEFAULT_PLANT);

  return (
    <div className="createPlant">
      <div>
        <form className="new-plant-form">
          <div>
            <i>Plant Type</i>
            <input
              id="plant"
              name="plant"
              type="plant"
              onChange={plantInfo.plant}
              className="validate"
            />
          </div>

          <div className="">
            <i id="" className="">
              Plant Location
            </i>
            <input
              id="location"
              name="location"
              type="location"
              onChange={plantInfo.location}
              className="validate"
            />

          </div>

          <div className="">
            <i id="" className="">
              Amount of H20 Needed
            </i>
            <input
              id="waterNeeded"
              name="waterNeeded"
              type="waterNeeded"
              onChange={plantInfo.waterNeeded}
              className="validate"
            />
          </div>
        </form>

        <button type="submit" onClick={() => setPlantInfo()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewPlant;
