const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review: String,
  name: String,
  date: String,
});

const itinerarySchema = new mongoose.Schema({
  day: String,
  heading: String,
});

const BhutanSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  heading: String,
  subHeading: String,
  duration: String,
  exclusions: [String],
  inclusions: [String],
  reviews: [reviewSchema],
  visaPolicy: [String],
  mapSrc: String,
  reviewHeading: String,
  previousPrice: String,
  price: String,
  itinerary: [itinerarySchema],
});

module.exports = mongoose.model("Bhutan", BhutanSchema);
