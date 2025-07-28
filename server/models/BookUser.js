// bookingModel.js

const mongoose = require('mongoose');

// Define the booking schema
const BookUerSchema = new mongoose.Schema({
  visitor_name: {
    type: String,
    required: true
  },
  visitor_email: {
    type: String,
    required: true
  },
  visitor_phone: {
    type: String,
    required: true
  },
  total_adults: {
    type: Number,
    required: true,
    min: 1
  },
  total_children: {
    type: Number,
    required: true,
    min: 0
  },
  checkin: {
    type: Date,
    required: true
  },
  checkout: {
    type: Date,
    required: true
  },
  room_preference: {
    type: String,
    required: true
  },
  visitor_message: String
});

// Create the booking model
const Booking = mongoose.model('Booking',BookUerSchema);

// Export the model
module.exports = Booking;
