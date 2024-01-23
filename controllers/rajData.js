const Rajasthan = require("../models/rajData");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllData = asyncWrapper(async (req, res) => {
  const data = await Rajasthan.find({});
  res.status(200).json({ data });
});
const getHomeData = asyncWrapper(async (req, res) => {
  res.status(200).send("go to /getRajasthanData");
});

module.exports = {
  getAllData,
  getHomeData,
};