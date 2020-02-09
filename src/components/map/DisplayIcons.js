import React from "react";
import IconText from "./IconText";
import { Marker, Popup } from "react-leaflet";

import icons from "../../data/icons";

function DisplayIcons({ activeIconTypes, locations }) {
  const displayIcons = activeIconTypes.map(iconType => {
    return locations[iconType].map(location => {
      const icon = icons[iconType];
      const popupText = IconText(location, iconType);

      return (
        <Marker
          position={location.coordinates}
          className={icon.classNames}
          icon={icon.icon}
          title={location.name}
          key={location.name}
        >
          <Popup>
            <span>{popupText}</span>
          </Popup>
        </Marker>
      );
    });
  });

  return <div>{displayIcons}</div>;
}

export default DisplayIcons;
