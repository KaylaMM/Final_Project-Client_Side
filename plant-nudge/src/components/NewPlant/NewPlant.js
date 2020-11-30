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
              onChange={(e) => {
                console.log(e.target.value);
                setPlantInfo(e.target.value);
              }}
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
              onChange={(e) => {
                console.log(e.target.value);
                setPlantInfo(e.target.value);
              }}
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
              onChange={(e) => {
                console.log(e.target.value);
                setPlantInfo(e.target.value);
              }}
              className="validate"
            />
          </div>
        </form>

        <button type="submit" onClick={() => {
          console.log('my state',plantInfo)
          // setPlantInfo()
        }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewPlant;
