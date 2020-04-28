import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const AUTH_SERVICE = {
  signup(userData) {
    return service.post("/signup", userData);
  },

  login(userData) {
    return service.post("/login", userData);
  },

  logout() {
    return service.post("/logout", {});
  },

  getUser() {
    return service.get("/isLoggedIn");
  },
};

export default AUTH_SERVICE;
