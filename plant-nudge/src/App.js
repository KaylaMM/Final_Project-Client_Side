import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AllUserPlants from "./components/AllUserPlants/AllUserPlants";
import "./App.css";
import "typeface-roboto";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <NavBar />
      <main style={{ marginTop: "64px" }}>
        <UserProfile />
      </main>
    </div>
  );
}

export default App;
