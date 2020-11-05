import React from "react";
import "./NewPlant.css";
// import NEW_PLANT_SERVICE from "../../services/PlantsService";
import { AuthContext } from "../../context";


const NewPlant = () => {
  
  constructor() {
      super();
  
      this.state = {
        newPlantForm: {
          plant: "",
          location: "",
          waterNeeded: "",
        },
      };
    }
  return (
    <AuthContext.Consumer>
      {(context) => {
        const {
          newPlantForm: { plant, location, waterNeeded },
        } = context.state;

        const { handleNewPlantInput, handleNewPlantSubmit } = context;

        return (
          <div className="createPlant">
            <div>
              <form className="new-plant-form">
                <div>
                  <i>Plant Type</i>
                  <input
                    id="plant"
                    name="plant"
                    type="text"
                    value={plant}
                    onChange={handleNewPlantInput}
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
                    value={location}
                    onChange={handleNewPlantInput}
                    className="validate"
                  />
                </div>

                <div className="">
                  <i id="" className="">
                    Amount of H20 Needed
                  </i>
                  <input id="waterNeeded"
                    name="waterNeeded"
                    type="waterNeeded"
                    value={waterNeeded}
                    onChange={handleNewPlantInput}
                    className="validate" />
                </div>
              </form>

              <button type="submit" onChange={handleNewPlantSubmit}> Submit </button>
            </div>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default NewPlant;
