const WeekendExclusivePackage = require("../../../models/domestic/weekendTrendingData");

const asyncWrapper = require("../../../middleware/async");

const getWeekendTrendingData = asyncWrapper(async (req, res) => {
  const data = await WeekendExclusivePackage.find({});
  res.status(200).json({ data });
});

module.exports = {
  getWeekendTrendingData,
};
