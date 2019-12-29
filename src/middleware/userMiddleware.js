const { check } = require("express-validator");

exports.registerMiddlware = [
  check("name", "Name required")
    .not()
    .isEmpty(),
  check("email", "Email required")
    .not()
    .isEmpty(),
  check("password", "Password required")
    .not()
    .isEmpty()
];

exports.loginMiddlware = [
  check("email", "Email required")
    .not()
    .isEmpty(),
  check("password", "Password required")
    .not()
    .isEmpty()
];
