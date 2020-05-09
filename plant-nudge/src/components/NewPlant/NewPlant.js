import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
// import Calendar from "react-calendar";
import PlantToggle from "../PlantToggle/PlantToggle";

import "./NewPlant.css";
import NEW_PLANT_SERVICE from "../../services/PlantsService";
import { AuthContext } from "../../context";

const DEFAULT_STATE = {
  newPlantType: "",
  newLocation: "",
  newAmountOfWaterNeeded: "",
  newProgressPic: null,
};

class NewPlant extends Component {
  state = {
    ...DEFAULT_STATE,
    errorMessage: "",
    successMessage: "",
  };

  toggleFormOff = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleNewPlantInput = (e) => {
    const {
      target: { name, value },
    } = e;
    console.log("target in new plant -=--=-", name, value);

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleNewPlantSubmit = (e, user, cb, toggle) => {
    e.preventDefault();
    NEW_PLANT_SERVICE.newPlant({
      ...this.state,
      plantOwner: user._id,
    })
      .then((responseFromServer) => {
        const { currentUser } = responseFromServer.data;
        cb(currentUser);
        const {
          data: { errorMessage },
        } = responseFromServer;
        if (errorMessage) {
          this.setState({
            ...DEFAULT_STATE,
            errorMessage,
            displayForm: this.props.isShown,
          });
        }
        this.props.isDone(this.state.isDone);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          this.setState((prevState) => ({
            ...prevState,
            errorMessage: err.response.data.message,
          }));
        }
      });
  };

  render() {
    const {
      newPlantType,
      newLocation,
      newAmountOfWaterNeeded,
      // newProgressPic,
    } = this.state;
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
                    this.handleNewPlantSubmit(e, currentUser, syncUser)
                  }
                >
                  <div>
                    <i>Plant Type</i>
                    <input
                      type="text"
                      className="validate"
                      name="newPlantType"
                      value={this.state.newPlantType}
                      onChange={this.handleNewPlantInput}
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
                      value={this.state.newLocation}
                      onChange={this.handleNewPlantInput}
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
                      value={this.state.newAmountOfWaterNeeded}
                      onChange={this.handleNewPlantInput}
                      required
                    />
                  </div>

                  <div className="">
                    <i id="" className="">
                      Next Watering
                    </i>
                    {/* <Calendar /> */}
                  </div>

                  <div className="">
                    <div className="">
                      <legend
                        className="addImage"
                        style={{ marginTop: "20px" }}
                      >
                        <i>Add a Picture</i>
                      </legend>
                      <input type="file" onChange={this.handleNewPlantInput} />
                    </div>
                  </div>
                </form>

                {/* <button>
                  <Link to="/progress-album">Progress Album</Link>
                </button>  */}
                <button
                  type="submit"
                  onSubmit={(e) =>
                    this.handleNewPlantSubmit(e, currentUser, syncUser)
                  }
                >
                  {" "}
                  Submit{" "}
                </button>
                {/* <PlantToggle /> */}
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default NewPlant;
