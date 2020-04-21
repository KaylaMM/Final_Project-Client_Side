import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// import NavBar from "./components/NavBar/NavBar";
// import AllUserPlants from "./components/AllUserPlants/AllUserPlants";
// import UserProfile from "./components/UserProfile/UserProfile";
// import "typeface-roboto";

import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import UserProfile from "./components/UserProfile/UserProfile";

import { AuthContext } from "./context/index";

function App() {
  let context = React.useContext(AuthContext);

  React.useEffect(() => {
    AudioContext.isUserLoggedIn();
  }, []);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/user-profile" component={UserProfile} />
      </Switch>
    </div>

    // =-=-=-=-=-=-=- NAV BAR CODE =-=-=-=-=-=-=-
    // <div style={{ height: "100%" }}>
    //   <NavBar />
    //   <main style={{ marginTop: "64px" }}>
    //     <UserProfile />
    //   </main>
    // </div>
    // =-=-=-=-=-=-=- NAV BAR CODE =-=-=-=-=-=-=-
  );
}

export default App;
