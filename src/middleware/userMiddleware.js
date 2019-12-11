const { check } = require("express-validator");

const registerMiddlware = [
  (console.log("I am working"),
  check("name", "Name required")
    .not()
    .isEmpty(),
  check("userName", "User Name required")
    .not()
    .isEmpty(),
  check("email", "Email required")
    .not()
    .isEmpty(),
  check("password", "Password required")
    .not()
    .isEmpty(),
  check("mobile", "Mobile required")
    .not()
    .isEmpty())
];

module.exports = registerMiddlware;
