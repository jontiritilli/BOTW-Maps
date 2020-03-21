import React from "react";
import IconToggle from "./IconToggle";
import icons from "../../data/icons";
import "./controlPanel.css";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.toggleMenuState = this.toggleMenuState.bind(this);
  }
  createIconToggles() {
    const iconToggles = Object.keys(icons).map(iconType => {
      const { displayName } = icons[iconType];

      return <IconToggle {...{ displayName, iconType, key: iconType }} />;
    });
    return iconToggles;
  }

  toggleMenuState() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const displayIconToggles = this.createIconToggles();
    return (
      <div
        className={
          this.state.isActive ? "control-panel active" : "control-panel"
        }
      >
        <div
          className={
            this.state.isActive ? "menu-control active" : "menu-control"
          }
          onClick={this.toggleMenuState}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <div className={this.state.isActive ? "legend active" : "legend"}>
          {displayIconToggles}
        </div>
      </div>
    );
  }
}

export default ControlPanel;
