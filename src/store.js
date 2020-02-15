import React, { createContext } from "react";
import locationData from "./data/locations";

const Store = createContext();

const initialState = {
  activeIconTypes: [],
  locations: locationData
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_TYPES":
      let activeIconTypes;
      const { iconType } = action;
      const isTypeActive = state.activeIconTypes.includes(iconType);
      if (isTypeActive) {
        activeIconTypes = state.activeIconTypes.filter(
          icon => icon !== iconType
        );
      } else {
        activeIconTypes = [...state.activeIconTypes, iconType];
      }
      return { ...state, activeIconTypes };
    default:
      throw new Error();
  }
}

function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

export { Store, StoreProvider };
