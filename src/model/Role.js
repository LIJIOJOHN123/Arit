const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  roleId: {
    type: String,
    unique: true,
    required: true
  },
  type: {
    type: String,
    unique: true,
    required: true
  },
  right: [
    {
      name: String,
      path: String,
      url: String
    }
  ]
});
const Role = mongoose.model("Role", RoleSchema);

module.exports = Role;
