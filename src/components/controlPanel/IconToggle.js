import React, { useContext } from "react";
import { Store } from "../../store";

const IconToggle = ({ displayName, iconType }) => {
  const { dispatch } = useContext(Store);
  const iconIdentifier = `${iconType}-control-checkbox`;

  return (
    <li>
      <input type="checkbox" id={iconIdentifier} />
      <label
        htmlFor={iconIdentifier}
        onClick={() => dispatch({ type: "SET_ACTIVE_TYPES", iconType })}
        title={displayName}
      >
        <img src={`images/icons/${iconType}.png`} alt={iconType} />
      </label>
    </li>
  );
};

export default IconToggle;
