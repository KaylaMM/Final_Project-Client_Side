import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
// import Calendar from "react-calendar";

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

  handleNewPlantSubmit = (e, user, cb, toggle) => {
    e.preventDefault();
    NEW_PLANT_SERVICE.newPlant({
      ...this.state,
      planyOwner: user._id,
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
                      value={newPlantType}
                      onChange={this.onChangeHandler}
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
                      value={newLocation}
                      onChange={this.onChangeHandler}
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
                      value={newAmountOfWaterNeeded}
                      onChange={this.onChangeHandler}
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
                      <input type="file" onChange={this.updateFileInState} />
                    </div>
                  </div>
                </form>
                <button>
                  <Link to="/progress-album">Progress Album</Link>
                </button>
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default NewPlant;

// constructor(props) {
//   super(props);
//   this.state = {};
// }

// handlePlantSubmit = (event) => {
//   event.preventDefault();

//   let newPlant = new FormData();
//   newPlant.append("thePlantType", this.state.newPlantType);
//   newPlant.append("thePlantLocation", this.state.newLocation);
//   this.state.newAmountOfWaterNeeded.append(
//     "theWaterNeeded",
//     this.state.newAmountOfWaterNeeded
//   );
//   this.state.newProgressPic.append(
//     "theProgressPic",
//     this.state.newProgressPic
//   );
//   console.log(this.state);
//   axios
//     .post(`${process.end.REACT_APP_BASE}/userPlants/newPlant`, newPlant, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       withCredentials: true,
//     })
//     .then((theCreatedPlant) => {
//       this.props.history.push("/viewPlant" + theCreatedPlant.data._id);
//       this.setState({
//         newPlant: "",
//         newLocation: "",
//         newAmountOfWaterNeeded: "",
//       });
//     })
//     .catch((error) => console.log(error));
// };

// handleChange = (event) => {
//   const { name, value } = event.target;
//   this.setState({ [name]: value });
//   console.log(this.state);
// };

// updateFileInState = (e) => {
//   this.setState({ newImage: e.target.files[0] });
// };
