const asyncWrapper = require("../../../middleware/async");
const WeekendAndaman = require("../../../models/weekend/domestic/andamanWeekendData");
const WeekendGoa = require("../../../models/weekend/domestic/goaWeekendData");
const WeekendKashmir = require("../../../models/weekend/domestic/kashmirWeekendData");
const WeekendUttarakhand = require("../../../models/weekend/domestic/uttarakhandWeekendData");

const getAndamanWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendAndaman.find({});
  res.status(200).json({ data });
});
const getGoaWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendGoa.find({});
  res.status(200).json({ data });
});
const getKashmirWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendKashmir.find({});
  res.status(200).json({ data });
});
const getUttarakhandWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendUttarakhand.find({});
  res.status(200).json({ data });
});

const getAllWeekendStateData = asyncWrapper(async (req, res) => {
  const weekendAndaman = await WeekendAndaman.find({});
  res.status(200).json({
    weekendAndaman,
  });
  const weekendGoa = await WeekendGoa.find({});
  res.status(200).json({
    weekendGoa,
  });
  const weekendKashmir = await WeekendKashmir.find({});
  res.status(200).json({
    weekendKashmir,
  });
  const WeekendUttarakhand = await WeekendUttarakhand.find({});
  res.status(200).json({
    WeekendUttarakhand,
  });
});

module.exports = {
  getAllWeekendStateData,
  getAndamanWeekend,
  getGoaWeekend,
  getKashmirWeekend,
  getUttarakhandWeekend,
};
