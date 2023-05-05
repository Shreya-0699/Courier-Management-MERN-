const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courierTypeSchema = new Schema({
  courier_type: { type: String, required: true }, //to give our types using enum
  cost: { type: Number, required: true },
  weight: { type: Number, required: true },
  //total:{ type: Number, required: false}  //derive from price and wt.

  //
});
//derive from price and wt.
courierTypeSchema.virtual("total").get(function () {
  return this.cost * this.weight;
});

module.exports = mongoose.model("CourierType", courierTypeSchema);
