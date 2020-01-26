const { readFileSync, writeFileSync } = require("fs");

const outputDirectory = "../../src/data/locations";
const destinationFile = getDestinationFile(type);

const types = {
  korok: "korok.js",
  memory: "memory.js",
  shrine: "shrine.js",
  stable: "stable.js",
  tower: "tower.js",
  town: "town.js"
};

const getDestinationFile = type => {
  const type = types[type];
  if (!type) {
    throw new Error("Type not found. Please provide a valid type" + types);
  }
  const destination = outputDirectory + type;
  return destination;
};

const read = type => {
  console.info("Reading JSON file");
  try {
    const file = getDestinationFile(type);
    console.info("filename: ", file);
    return JSON.parse(readFileSync(file));
  } catch (e) {
    console.error("Error reading JSON", e);
    return e;
  }
};

const write = (type, data) => {
  console.info("Writing JSON file");
  try {
    const file = getDestinationFile(type);
    console.info("filename: ", file);
    return writeFileSync(file, JSON.stringify(data, null, " "), "utf8");
  } catch (e) {
    console.error("Error writing JSON", e);
    throw e;
  }
};

export { read, write };
