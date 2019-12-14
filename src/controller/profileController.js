const Profile = require("../model/Profile");

exports.addProfile = async (req, res) => {
  const newProfile = {
    user: req.user._id,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    website: req.body.website,
    firstLanguage: req.body.firstLanguage,
    secondaryLanguage: req.body.secondaryLanguage
  };
  console.log(req.user._id);
  const address = {
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    state: req.body.state,
    pin: req.body.pin
  };
  const education = {
    school: req.body.school,
    yearStart: req.body.yearStart,
    yearEnd: req.body.yearEnd,
    description: req.body.description,
    currentStatus: req.body.currentStatus
  };
  const work = {
    company: req.body.company,
    position: req.body.position,
    workPlace: req.body.placer,
    workStart: req.body.workStart,
    workEnd: req.body.workEnd,
    workStatus: req.body.workStatus
  };
  const placeYouLived = { place: req.body.place };
  try {
    const profile = new Profile(newProfile);
    profile.address = address;
    profile.education = education;
    profile.placeYouLived = placeYouLived;
    profile.work = work;
    await profile.save();
    res.send(profile);
  } catch (error) {
    res.status(500).send();
  }
};
exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user
    });
    console.log(profile);
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};
