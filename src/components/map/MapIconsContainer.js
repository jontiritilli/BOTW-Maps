import React from "react";
import { connect } from "react-redux";
import DisplayIcons from "./DisplayIcons";

import "./mapIconsContainer.css";

function MapIconsContainer(props) {
  const { activeIconTypes, locations } = props;

  return (
    <div>
      {activeIconTypes && locations && (
        <DisplayIcons {...{ activeIconTypes, locations }} />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  const activeIconTypes = state.activeIconTypes;

  return {
    activeIconTypes,
    locations: state.locations
  };
};

export default connect(mapStateToProps)(MapIconsContainer);
