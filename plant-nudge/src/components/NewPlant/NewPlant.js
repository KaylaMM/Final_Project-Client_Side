import React, { Component } from "react";
import axios from "axios";
import "./NewPlant.css";
import { ThemeProvider } from "@material-ui/core";

class NewPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlantType: "",
      newLocation: "",
      newAmountOfWaterNeeded: "",
      newProgressPic: null,
    };
  }

  handlePlantSubmit = (event) => {
    event.preventDefault();

    let newPlant = new FormData();
    newPlant.append("thePlantType", this.state.newPlantType);
    newPlant.append("thePlantLocation", this.state.newLocation);
    this.state.newAmountOfWaterNeeded.append(
      "theWaterNeeded",
      this.state.newAmountOfWaterNeeded
    );
    this.state.newProgressPic.append(
      "theProgressPic",
      this.state.newProgressPic
    );
    console.log(this.state);
    axios
      .post(`${process.end.REACT_APP_BASE}/userPlants/newPlant`, newPlant, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((theCreatedPlant) => {
        this.props.history.push("/viewPlant" + theCreatedPlant.data._id);
        this.setState({
          newPlant: "",
          newLocation: "",
          newAmountOfWaterNeeded: "",
        });
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  updateFileInState = (e) => {
    this.setState({ newImage: e.target.files[0] });
  };

  render() {
    //   console.log(this.props);
    return (
      <div>
        <div className="createPlant" />
        <div>
          <form onSubmit={this.handlePlantSubmit}>
            <div>
              <i>New Plant</i>
              <input
                type="text"
                className="validate"
                name="newPlantType"
                value={this.state.newPlantType}
                onChange={(e) => this.handleChange(e)}
                required
              />
            </div>
          </form>
        </div>

        <div className="">
          <i id="" className="">
            Some Text Here
          </i>
          <input
            id=""
            type="text"
            className="validate"
            name="newLocation"
            value={this.state.newLocation}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <label htmlFor=""> Plant Location </label>
        </div>

        <div className="">
          <input
            id=""
            type="text"
            className="validate"
            name="newAmountOfWaterNeeded"
            value={this.state.newAmountOfWaterNeeded}
            onChange={(e) => this.handleChange(e)}
            required
          />
          <label htmlFor="waterNeeded"> Amount of Water Needed </label>
        </div>

        <div className="">
          <div className="">
            <legend className="addImage" style={{ marginTop: "20px" }}>
              Add a Picture
            </legend>
            <input type="file" onChange={this.updateFileInState} />
          </div>
          <button className="">Progress Album</button>
        </div>
      </div>
    );
  }
}

export default NewPlant;