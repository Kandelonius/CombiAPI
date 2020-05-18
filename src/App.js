// App to hold the opening information
import React from "react";
import "./App.css";
import Geolocation from "./components/Geolocation";
import MTG from "./components/MTG";

const App = () => {
  return (
    <div className="App">
      {/* <Geolocation /> */}
      <MTG />
    </div>
  );
}

export default App;