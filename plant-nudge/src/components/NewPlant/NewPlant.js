import React, { Component } from "react";
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
  }

    handleNewPlantInput = (e) => {
        const {	
      target: { name, value },	
    } = e;	
    console.log("target in new plant -=--=-", name, value);	

    this.setState((prevState) => ({	
      ...prevState,	
      [name]: value,	
    }));	
  }

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

  render(){
    const {
      newPlantType,
      newLocation,
      newAmountOfWaterNeeded,
    } = this.state;
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { currentUser } = context.state;
          const { syncUser } = context;
        
        return (
          <div className="createPlant">
          <div>
            <form className="new-plant-form"
            onSubmit={(e) =>
            this.handleNewPlantSubmit(e, currentUser. syncUser)}>
            <div>
              <i>Plant Type</i>
              <input type="text"
              className="validate"
              name="newPlantType"
              value={newPlantType}
              onChange={this.handleNewPlantInput}
              required />
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
              onChange={this.handleNewPlantInput}
              required
            />
            </div>

               <div className="">
            <i id="" className="">
            Amount of H20 Needed
            </i>
            <input 
              id=""
              type="text"
              className="validate"
              name="newAmountOfWaterNeeded"
              value={newAmountOfWaterNeeded}
              onChange={this.handleNewPlantInput}
              required
            />
            </div>

            </form>

            <button 
            type="submit"
            onSubmit={(e) =>
            this.handleNewPlantSubmit(e, currentUser, syncUser)}
            >
              {" "} Submit {" "}
            </button>
          </div>

          </div>
        )
        }}
      </AuthContext.Consumer>
    )
  }
  };






export default NewPlant;
