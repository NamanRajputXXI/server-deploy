const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  address: String,
  state: String,
  city: String,
  telephone: String,
  email: String,
  website: String,
  images: [String],
  videos: [String],
});

const destinationSchema = new mongoose.Schema({
  destination: String,
  hotels: [hotelSchema],
});

const packageSchema = new mongoose.Schema({
  package: String,
  price: String,
  previousPrice: String,
  hotelDestination: String,
  hotelDetails: [destinationSchema],
});

const kashmirHotelsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  kashmirHotelsData: [packageSchema],
});

const KashmirHotels = mongoose.model("KashmirHotels", kashmirHotelsSchema);
module.exports = KashmirHotels;
