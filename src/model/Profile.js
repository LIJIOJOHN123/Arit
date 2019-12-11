const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: {
    type: String
  },
  dataOfBirth: {
    type: String
  },
  gender: {
    type: String
  },
  webste: { type: String },
  firstLanguage: { type: String },
  secondaryLanguage: { type: String },

  education: [
    {
      School: { type: String },
      yearStart: { type: Date },
      yearEnd: { type: Date },
      description: { type: String },
      currentStatus: { tpe: Boolean }
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
      place: { type: String },
      yearStart: { type: Date },
      yearEnd: { type: Date },
      currentStatus: { type: Boolean }
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
