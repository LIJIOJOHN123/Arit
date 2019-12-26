const User = require("../model/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

exports.registartion = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const user = new User(req.body);

    //validate email address
    let emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    let valid = emailRegex.test(req.body.email);
    if (!valid)
      return res.status(400).json({
        errors: [{ msg: "Please enter valid email address" }]
      });
    const email = await User.findOne({ email: req.body.email });
    if (email) {
      return res.status(400).json({
        errors: [{ msg: "Email is in use.Please user other email" }]
      });
    }
    await user.save();
    const token = await user.generateToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(500).json({
      errors: [
        {
          msg: "Sorrry! We cound not process request. Please try once again"
        }
      ]
    });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send("Please verify your email and password");
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).send("Please verify your email and password");
    }
    const token = await user.generateToken();
    res.send({ user, token });
  } catch (error) {
    res.status(500).send(error);
  }
};
//get userinfor
exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id });
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
//update user
exports.updateUserInfo = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "mobile"];
  const isValidUpdate = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidUpdate) {
    return res.status(400).send("Invalid udpate");
  }

  try {
    updates.map(update => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    res.status(500).send(error);
  }
};
