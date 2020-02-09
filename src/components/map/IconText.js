import icons from "../../data/icons";

function IconText(location, iconType) {
  const instructions = icons[iconType].instructions;

  if (location.name) {
    return location.name;
  } else if (instructions) {
    return instructions[location.instructionType];
  }
}

export default IconText;
