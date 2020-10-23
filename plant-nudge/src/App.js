import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "./context";
import "./App.css";

import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import ProgressAlbum from "./components/ProgressAlbum/ProgressAlbum";
import SignUp from "./components/SignUp/SignUp";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  let context = React.useContext(AuthContext);
  React.useEffect(() => {
    context.isUserLoggedIn();
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/">
          <LogIn />
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
        <Route exact path="/auth/login" render={LogIn} />
        <Route exact path="/auth/signup" render={SignUp} />
        <Route exact path="/progress-album" render={ProgressAlbum} />
        <Route exact path="/" render={Home} />
      </Switch>
    </div>
  );
}

export default App;
