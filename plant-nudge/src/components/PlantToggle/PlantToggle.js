import React from "react";
import { Link } from "react-router-dom";

const PlantToggle = (props) => {
  const {
    userLoggedIn,
    passedDownTogglePlantForm,
    passedDownUpdatePlantSelector,
  } = props;

  return (
    <div>
      <div>
        {userLoggedIn ? (
          userLoggedIn.plant?.length > 0 ? (
            userLoggedIn.plant.map((plant, index) => {
              const { _id } = plant;
              return (
                <Link
                  to={`userPlants/updatePlant/${_id}`}
                  key={index}
                  onClick={(e) => passedDownUpdatePlantSelector(_id)}
                />
              );
            })
          ) : (
            <div>
              <p> You have no plants! </p>
            </div>
          )
        ) : (
          <div></div>
        )}
        <button onClick={() => passedDownTogglePlantForm()}>
          {" "}
          Plant Toggle{" "}
        </button>
      </div>
    </div>
  );
};

export default PlantToggle;
