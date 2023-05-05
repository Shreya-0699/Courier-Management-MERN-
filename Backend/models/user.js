  const mongoose = require("mongoose");

  const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Password must be at least 8 characters long"],
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["customer", "superAdmin", "systemUser", "deliveryValet"],
      default: "customer",
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    mobileNo: {
      type: String,
      required: true,
      unique: true,
    },
    licenseNumber: {type: String, 
      validate: [
      function () {
        // check if licenseNumber is required for deliveryValet role
        if (this.role === "deliveryValet") {
          return this.licenseNumber && this.licenseNumber.length > 0;
        }
        return true;
      },
      "License number is required for delivery valet role",
    ],},
    isActive:{type: String,},
    salary: { type: Number ,required:false},
  });
  //modelname, schema to refer
  module.exports = mongoose.model("User", userSchema);



  
// // to join orders with customer
//db.orders.aggregate([
//     {
//         $lookup: {
//             from: "customers",
//             localField: "customerId",
//             foreignField: "_id",
//             as: "customer"
//         }
//     }
// ])