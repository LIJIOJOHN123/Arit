const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: {
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
      School: { type: String },
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
      workStart: { type: Date },
      workEnd: { type: Date },
      workStatus: { type: Boolean }
    }
  ],
  detailsAboutYou: [
    {
      aboutYou: {
        type: String,
        otherName: String
      }
    }
  ]
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
