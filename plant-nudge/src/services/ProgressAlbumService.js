import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const PROGRESS_ALBUM_SERVICE = {
  createNewPhoto(progressPoto) {
    return service.post("/progressPhotos/newPhoto", progressPoto, {
      withCredentials: true,
    });
  },
  getPhotos() {
    return service.get("/progressPhotos/allPhotos", { withCredentials: true });
  },
  getUpdatePhotos(photoID) {
    return service.get(`/progressPhotos/updateProgressPhoto/${photoID}`);
  },
  getDeletePhoto(photoID) {
    return service.get(`/progressPhotos/deleteProgressPhoto/${photoID}`);
  },
};

export default PROGRESS_ALBUM_SERVICE;
