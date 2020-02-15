import React from "react";
import IconToggle from "./IconToggle";
import icons from "../../data/icons";
import "./controlPanel.css";

const ControlPanel = () => {
  const displayIconToggles = Object.keys(icons).map(iconType => {
    const { displayName } = icons[iconType];

    return <IconToggle {...{ displayName, iconType, key: iconType }} />;
  });

  return (
    <div className="control-panel">
      <ul className="legend-list">{displayIconToggles}</ul>
    </div>
  );
};

export default ControlPanel;
