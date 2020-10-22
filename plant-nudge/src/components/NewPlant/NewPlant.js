import React, { Component } from "react";
import "./NewPlant.css";
import { AuthContext } from "../../context";



class NewPlant extends Component {

  render() {
    return (
      <AuthContext.Consumer>
    

          return (
            <div className="createPlant">
              <div>
                <form
                  className="new-plant-form"
                >
                  <div>
                    <i>Plant Type</i>
                    <input
                      type="text"
                      className="validate"
                      name="newPlantType"
                      value=""
                      onChange=""
                      required
                    />
                  </div>

                  <div className="">
                    <i id="" className="">
                      Plant Location
                    </i>
                    <input
                      id=""
                      type="text"
                      className="validate"
                      name="newLocation"
                      value=""
                      onChange=""
                      required
                    />
                  </div>

                  <div className="">
                    <i id="" className="">
                      Amount of H2O Needed
                    </i>
                    <input
                      id=""
                      type="text"
                      className="validate"
                      name="newAmountOfWaterNeeded"
                      value=""
                      onChange=""
                      required
                    />
                  </div>

                  <div className="">
                    <i id="" className="">
                      Next Watering
                    </i>
                  </div>

                  <div className="">
                    <div className="">
                      <legend
                        className="addImage"
                        style={{ marginTop: "20px" }}
                      >
                        <i>Add a Picture</i>
                      </legend>
                      <input type="file" onChange="" />
                    </div>
                  </div>
                </form>

                <button
                  type="submit"
                >
                  {" "}
                  Submit{" "}
                </button>
               
              </div>
            </div>
      
      </AuthContext.Consumer>
    );
  }
}

export default NewPlant;
