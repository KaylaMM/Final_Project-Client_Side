import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "./context";
// import NEW_PLANT_SERVICE from "./services/PlantsService";
// import PROGRESS_ALBUM_SERVICE from "./services/ProgressAlbumService";
import "./App.css";

// import Calendar from "./components/Calendar/Calendar";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
// import NavBar from "./components/NavBar/NavBar";
// import NewPlant from "./components/NewPlant/NewPlant";
import ProgressAlbum from "./components/ProgressAlbum/ProgressAlbum";
import SignUp from "./components/SignUp/SignUp";
// import UploadedPic from "./components/UploadedPic/UploadedPic";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  let context = React.useContext(AuthContext);
  // console.log("context", context);
  React.useEffect(() => {
    context.isUserLoggedIn();
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/user-profile" component={UserProfile} />
        <Route exact path="/auth/login" component={LogIn} />
        <Route exact path="/auth/signup" component={SignUp} />
        <Route exact path="/progress-album" component={ProgressAlbum} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
