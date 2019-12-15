const Profile = require("../model/Profile");
/******************* Add Profile Items ********************/
//add Profile
exports.addProfile = async (req, res) => {
  const newProfile = {
    user: req.user._id,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    website: req.body.website,
    firstLanguage: req.body.firstLanguage,
    secondaryLanguage: req.body.secondaryLanguage
  };
  try {
    const profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { $set: newProfile },
      { new: true, upsert: true }
    );
    if (!profile) {
      profile = new Profile(newProfile);
      await profile.save();
      res.send(profile);
    }
    await profile.save();
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};
//add address
exports.addAddress = async (req, res) => {
  const newAddress = {
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    state: req.body.state,
    pin: req.body.pin
  };
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    profile.address.unshift(newAddress);
    await profile.save();
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};
//add education
exports.addEduction = async (req, res) => {
  const newEducation = {
    school: req.body.school,
    yearStart: req.body.yearStart,
    yearEnd: req.body.yearEnd,
    description: req.body.description,
    currentStatus: req.body.currentStatus
  };
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    profile.education.unshift(newEducation);
    await profile.save();
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};
//add work
exports.addWork = async (req, res) => {
  const newWork = {
    company: req.body.company,
    position: req.body.position,
    workPlace: req.body.workPlace,
    workStart: req.body.workStart,
    workEnd: req.body.workEnd,
    workStatus: req.body.workStatus
  };
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    profile.work.unshift(newWork);
    await profile.save();
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};
// add place
exports.addPlace = async (req, res) => {
  const newPlace = { place: req.body.place };
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    profile.placeYouLived.unshift(newPlace);
    await profile.save();
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};
/******************* Edit Profile Items ********************/
exports.editAddress = async (req, res) => {
  const 
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user
    });
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};

// const newplaceLived = { place: req.body.place };
