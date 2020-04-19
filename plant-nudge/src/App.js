import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import "typeface-roboto";

function App() {
  return (
    <div>
      <NavBar />
      <main style={{ marginTop: "64px" }}>
        <p>This is the User Profile</p>
      </main>
    </div>
  );
}

export default App;
