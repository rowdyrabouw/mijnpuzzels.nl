const puzzles = require("./puzzles.json");

const getPuzzles = () => {
  return puzzles;
};

module.exports = () => {
  return {
    puzzlesAll: getPuzzles(),
  };
};
