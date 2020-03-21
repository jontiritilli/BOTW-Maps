import React, { useContext } from "react";
import { Store } from "../../store";

const IconToggle = ({ displayName, iconType }) => {
  const {
    dispatch,
    state: { activeIconTypes }
  } = useContext(Store);
  const isActive = activeIconTypes.includes(iconType);
  return (
    <div
      className={isActive ? "legend-icon active" : "legend-icon"}
      onClick={() => dispatch({ type: "SET_ACTIVE_TYPES", iconType })}
      title={displayName}
    >
      <img src={`images/icons/${iconType}.png`} alt={iconType} />
    </div>
  );
};

export default IconToggle;
