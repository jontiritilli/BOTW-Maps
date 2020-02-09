import React from "react";
import "./index.css";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { ControlPanel, reducer } from "./components/controlPanel/ControlPanel";

import MapContainer from "./components/map/MapContainer";

import locationData from "./data/locations";

const initialState = {
  activeIconTypes: [],
  locations: locationData
};

let store = createStore(reducer, initialState);

render(
  <Provider store={store}>
    <div>
      <ControlPanel store={store} />
      <MapContainer />
    </div>
  </Provider>,
  document.getElementById("map-container")
);
