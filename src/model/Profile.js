const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    dateOfBirth: {
      type: Date
    },
    gender: {
      type: String
    },
    webste: { type: String },
    firstLanguage: { type: String },
    secondaryLanguage: { type: String },
    address: [
      {
        address1: { type: String },
        address2: { type: String },
        city: { type: String, required: true },
        state: { type: String },
        pin: { type: String }
      }
    ],
    education: [
      {
        school: { type: String },
        yearStart: { type: Date },
        yearEnd: { type: Date },
        description: { type: String },
        currentStatus: { type: Boolean }
      }
    ],
    placeYouLived: [
      {
        place: { type: String }
      }
    ],
    work: [
      {
        company: { type: String },
        position: { type: String },
        workPlace: { type: String },
        workStart: { type: Number },
        workEnd: { type: Number },
        workStatus: { type: Boolean }
      }
    ]
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
