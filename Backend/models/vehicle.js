const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  vehicleType: {
    type: String,
    enum: ["car", "truck", "van", "suv", "motorcycle"],
    required: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  chassisNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  plateNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
