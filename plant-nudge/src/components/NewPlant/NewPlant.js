import React, { useState } from "react";
import "./NewPlant.css";
import { AuthContext } from "../../context";
import PlantCard from "../PlantCard/PlantCard";

const DEFAULT_PLANT = {
  plant: "",
  location: "",
  waterNeeded: "",
};

const NewPlant = () => {
  const [plantInfo, setPlantInfo, resetPlantInfo] = useState(DEFAULT_PLANT);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlantInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };


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
              value={plantInfo.plant}
              onChange={handleChange}
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
              value={plantInfo.location}
              onChange={handleChange}
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
              value={plantInfo.waterNeeded}
              onChange={handleChange}
              className="validate"
            />
          </div>
        </form>

        <button
          type="submit"
          onClick={() => setPlantInfo(""), 
            console.log("my state", plantInfo)
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewPlant;
