import axios from "axios";
import { ThemeProvider } from "@material-ui/core";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_BASE}/auth`,
      withCredentials: true,
    });
    this.service = service;
  }

  signup = (username, email, password) => {
    return this.service
      .post("/signup", { username: username, password: password })
      .then((response) => response.data);
  };

  login = (username, password) => {
    return this.service
      .post("/login", { username, password })
      .then((response) => response.data);
  };

  currentUser = () => {
    return this.service.get("/isLoggedIn").then((response) => response.data);
  };

  logout = () => {
    return this.service.post("/logout", {}).then((response) => response.data);
  };
}

export default AuthService;
