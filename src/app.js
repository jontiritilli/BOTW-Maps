import React from "react";
import ControlPanel from "./components/controlPanel/ControlPanel";
import MapContainer from "./components/map/MapContainer";
import "./index.css";

const App = () => {
  return (
    <React.Fragment>
      <ControlPanel />
      <MapContainer />
    </React.Fragment>
  );
};
export default App;
