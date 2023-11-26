module.exports = () => {
  return {
    environment: process.env.NODE_ENV || "PRD",
    now: new Date(),
  };
};
