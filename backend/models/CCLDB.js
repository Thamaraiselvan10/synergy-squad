const mongoose = require("mongoose");

const CCLDBSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
    },

    whatsappNumber: {
      type: String,
      match: /^[0-9]{10}$/,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    branch: {
      type: String,
      required: true,
    },

    yearOfStudy: {
      type: String,
      enum: ["I", "II", "III", "IV"],
      required: true,
    },

    idCardPhotocopyUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CCLDB", CCLDBSchema);
