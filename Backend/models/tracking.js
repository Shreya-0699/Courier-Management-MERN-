const mongoose = require("mongoose");

const trackingSchema = new mongoose.Schema({
  //deliveryValet id

  consignmentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Consignment",
  },
  status: {
    type: String,
    required: true,
    enum: ["created", "pickedUp", "inTransit", "delivered", "cancelled"],
    default: "created",
  },
  location: {
    type: String,
    required: true,
  },
  deliveryValet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    match: { role: "deliveryValet" },
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  dispatch_details: {
    type: Date,
    default: Date.now,
  },
  Shipping_date: {
    type: Date,
    default: Date.now,
  },
  outForDelivery_date: {
    type: Date,
    default: Date.now,
  },
  Delivery_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tracking", trackingSchema);

//   location: {
//     lat: { type: Number, required: true },
//     lng: { type: Number, required: true },
// }
