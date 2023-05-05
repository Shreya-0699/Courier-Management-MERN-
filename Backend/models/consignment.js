const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const consignmentSchema = new Schema({
  courier_type: { type: String, required: true }, //to give our types using enum
  price: { type: Number, required: true },
  weight: { type: Number, required: true },
  //trackingid
  //valetid
  custType: { type: String, required: true, enum: ["B2B", "B2C", "C2C"] },

  //sender will be customer who is already registered
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiver: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
  },
  dispatch_details: {
    date_Time: { type: Date, default: Date.now },
  },
  trackingId: {
    type: String,
    unique: true,
    required: true,
  },
  tracking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tracking",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "picked", "in transit", "delivered"],
    default: "pending",
  },
  deliveryDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Consignment", consignmentSchema);
