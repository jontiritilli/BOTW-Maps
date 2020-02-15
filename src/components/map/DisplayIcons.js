import React, { useContext } from "react";
import { Store } from "../../store";
import { Marker, Popup } from "react-leaflet";
import IconText from "./IconText";
import icons from "../../data/icons";

const DisplayIcons = () => {
  const {
    state: { activeIconTypes, locations }
  } = useContext(Store);
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
};

export default DisplayIcons;
