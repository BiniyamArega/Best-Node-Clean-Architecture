require("dotenv").config();
const env = require("./environment");
const { makeCustomFunctions } = require("./customMethods");

const makeHelper = () => {
  const customFunctions = makeCustomFunctions();

  return {
    customFunctions,
    env
  };
};

module.exports = { makeHelper };
