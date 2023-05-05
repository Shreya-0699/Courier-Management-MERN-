const mongoose = require("mongoose");
const officeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  adminDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    match: { role: "systemUser" }, //need to check properly
  },
});

module.exports = mongoose.model("Office", officeSchema);
