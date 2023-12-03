const puzzles = require("./puzzles.json");

const getPuzzles = () => {
  return puzzles.sort((a, b) => (a.brand > b.brand) ? 1 : ((b.brand > a.brand) ? -1 : 0));
};

module.exports = () => {
  return {
    puzzlesAll: getPuzzles(),
  };
};
