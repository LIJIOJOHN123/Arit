const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jws = require("jsonwebtoken");
const EnvVariable = require("../config/appConstants");
const ip = require("ip");
const gravatar = require("gravatar");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    mobile: {
      type: String,
      required: true
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        },
        ipAddress: {
          type: String
        }
      }
    ]
  },
  { timestamps: true }
);
UserSchema.pre("save", async function(next) {
  //encrypt password
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  // email small letter
  user.email = user.email.toLowerCase();

  user.name = user.name
    .toLowerCase()
    .trim()
    .replace(/ {1,}/g, " ")
    .split(" ")
    .map(single => single[0].toUpperCase() + single.slice(1))
    .join(" ");
  // avata
  user.avatar = await gravatar.url(user.email, { s: "200", r: "pg", d: "404" });
  next();
});

//generate token for authentication
UserSchema.methods.generateToken = async function() {
  const user = this;
  const token = jws.sign(
    { _id: user._id.toString() },
    EnvVariable.JWT_VARIABLE
  );
  user.tokens.ipAddress = await ip.address();
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};
//hide password and tokens array
UserSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};
const User = mongoose.model("User", UserSchema);

module.exports = User;
