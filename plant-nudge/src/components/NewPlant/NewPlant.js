import React, { useState, useEffect } from "react";
import "./NewPlant.css";
import NEW_PLANT_SERVICE from "../../services/PlantsService";
import { AuthContext } from "../../context";

const NewPlant = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { currentUser } = context.state;
        const { syncUser } = context;

        return (
          <div className="createPlant">
            <div>
              <form
                className="new-plant-form"
                onSubmit={(e) =>
                  this.handleNewPlantSubmit(e, currentUser.syncUser)
                }
              >
                <div>
                  <i>Plant Type</i>
                  <input type="text" className="validate" />
                </div>

                <div className="">
                  <i id="" className="">
                    Plant Location
                  </i>
                  <input id="" type="text" className="validate" />
                </div>

                <div className="">
                  <i id="" className="">
                    Amount of H20 Needed
                  </i>
                  <input id="" type="text" className="validate" />
                </div>
              </form>

              <button type="submit"> Submit </button>
            </div>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default NewPlant;
