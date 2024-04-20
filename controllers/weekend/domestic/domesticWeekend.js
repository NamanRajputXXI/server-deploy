const asyncWrapper = require("../../../middleware/async");
const WeekendDelhi = require("../../../models/weekend/domestic/delhiWeekendData");

const getDelhiWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendDelhi.find({});
  res.status(200).json({ data });
});

const getAllWeekendStateData = asyncWrapper(async (req, res) => {
  const WeekendDelhi = await WeekendDelhi.find({});
  res.status(200).json({
    WeekendDelhi,
  });
});

module.exports = {
  getAllWeekendStateData,
  getDelhiWeekend,
};
