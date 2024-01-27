const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review: String,
  name: String,
  date: String,
});

const itinerarySchema = new mongoose.Schema({
  day: String,
  heading: String,
  bulletPoints: [String],
});

const UttarakhandSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  heading: String,
  subHeading: String,
  numberOfPhotos: Number,
  duration: String,
  maxPeople: Number,
  minAge: String,
  pickup: String,
  overview: String,
  exclusion1: String,
  exclusion2: String,
  exclusion3: String,
  exclusion4: String,
  inclusion1: String,
  inclusion2: String,
  inclusion3: String,
  inclusion4: String,
  reviews: [reviewSchema],
  mapSrc: String,
  reviewHeading: String,
  adultPrice: String,
  babyPrice: String,
  childPrice: String,
  discount: String,
  endDate: String,
  homePickupAdultPrice: String,
  homePickupBabyPrice: String,
  homePickupChildPrice: String,
  minMax: String,
  previousPrice: String,
  price: String,
  startDate: String,
  itinerary: [itinerarySchema],
});

module.exports = mongoose.model("Uttarakhand", UttarakhandSchema);
