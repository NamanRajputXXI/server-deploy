const asyncWrapper = require("../../../middleware/async");
const WeekendDelhi = require("../../../models/weekend/domestic/delhiWeekendData");
const WeekendMumbai = require("../../../models/weekend/domestic/mumbaiWeekendData");

const getDelhiWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendDelhi.find({});
  res.status(200).json({ data });
});
const getMumbaiWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendMumbai.find({});
  res.status(200).json({ data });
});

const getAllWeekendStateData = asyncWrapper(async (req, res) => {
  const WeekendDelhi = await WeekendDelhi.find({});
  res.status(200).json({
    WeekendDelhi,
  });
  const WeekendMumbai = await WeekendMumbai.find({});
  res.status(200).json({
    WeekendMumbai,
  });
});

module.exports = {
  getAllWeekendStateData,
  getDelhiWeekend,
  getMumbaiWeekend,
};
