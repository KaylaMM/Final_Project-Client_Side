import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const NEW_PLANT_SERVICE = {
  createNewPLant(plant) {
    return service.post("/userPlants/newPlant", plant, {
      withCredentials: true,
    });
  },
  getPlants() {
    return service.get("/userPlants/allPlants", { withCredentials: true });
  },
  getUpdatePlantDetails(plantID) {
    return service.get(`/userPlants/updatePlant/${plantID}`);
  },
  getDeletePlant(plantID) {
    return service.get(`/userPlants/deletePlants/${plantID}`);
  },
};

export default NEW_PLANT_SERVICE;
