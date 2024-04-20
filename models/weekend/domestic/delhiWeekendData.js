// const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema({
//   review: String,
//   name: String,
//   date: String,
// });

// const itinerarySchema = new mongoose.Schema({
//   day: String,
//   heading: String,
//   bulletPoints: [String],
// });

// const DelhiWeekendSchema = new mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   heading: String,
//   subHeading: String,
//   duration: String,
//   maxPeople: Number,
//   minAge: String,
//   pickup: String,
//   overview: String,
//   exclusions: [String],
//   inclusions: [String],
//   reviews: [reviewSchema],
//   mapSrc: String,
//   reviewHeading: String,
//   previousPrice: String,
//   price: String,
//   itinerary: [itinerarySchema],
// });

// module.exports = mongoose.model("DelhiWeekend", DelhiWeekendSchema);

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

const DelhiWeekendSchema = new mongoose.Schema({
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

module.exports = mongoose.model("delhiWeekend", DelhiWeekendSchema);
