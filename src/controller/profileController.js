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
exports.editProfile = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const profile = await Profile.findOne({ user: req.user._id });
    updates.map(update => (profile[update] = req.body[update]));
    await profile.save();
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.editAddress = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    const index = profile.address.findIndex(
      address => address._id.toString() === req.params.id.toString()
    );
    const updates = Object.keys(req.body);
    updates.map(update => (profile.address[index][update] = req.body[update]));

    await profile.save();

    res.send(profile);
  } catch (error) {
    res.status(500).send;
  }
};
exports.editEducation = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    const index = profile.education.findIndex(
      education => education.id.toString() === req.params.id.toString()
    );
    const updates = Object.keys(req.body);
    updates.map(
      update => (profile.education[index][update] = req.body[update])
    );
    await profile.save();
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.editWork = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    const index = profile.work.findIndex(
      work => work.id.toString() === req.params.id.toString()
    );
    const updates = Object.keys(req.body);
    updates.map(update => (profile.work[index][update] = req.body[update]));
    await profile.save();
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};
/******************* Delete Profile Items ********************/
exports.deleteAddress = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    const index = profile.address.findIndex(
      address => address._id.toString() === req.params.id.toString()
    );
    if (index === -1) {
      return res.status(404).send("Address not exist");
    }
    profile.address.splice(index, 1);
    await profile.save();
    res.send(profile);
  } catch (error) {}
};
exports.deleteEducation = async (req, res) => {
  const profile = await Profile.findOne({ user: req.user._id });
  const index = profile.education.findIndex(
    education => education._id.toString() === req.params.id.toString()
  );
  if (index === -1) {
    return res.status(404).send("Education not exist");
  }
  profile.education.splice(index, 1);
  await profile.save();
  res.send(profile);
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.deleteWork = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    const index = profile.work.findIndex(
      work => work._id.toString() === req.params.id.toString()
    );
    if (index === -1) {
      return res.status(404).send("Work not exist");
    }
    profile.work.splice(index, 1);
    await profile.save();
    res.send(profile);
  } catch (error) {}
};
exports.deletePlace = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    const index = profile.placeYouLived.findIndex(
      place => place._id.toString() === req.params.id.toString()
    );
    if (index === -1) {
      return res.status(404).send("Place not exist");
    }
    profile.placeYouLived.splice(index, 1);
    await profile.save();
    res.send(profile);
  } catch (error) {}
};
/******************* Get Profile Items ********************/
exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user._id
    }).populate("user");
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getProfiles = async (req, res) => {
  try {
    const profile = await Profile.find().populate("user", [
      "name",
      "userName",
      "avatar"
    ]);
    res.send(profile);
  } catch (error) {
    res.status(500).send();
  }
};
exports.getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id).populate("user", [
      "name",
      "userName",
      "avatar"
    ]);
    res.send(profile);
  } catch (error) {
    res.status(500).send();
  }
};
