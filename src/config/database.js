const mongoose = require("mongoose");
const EnvVaraible = require("./appConstants");

const url = EnvVaraible.DATABASE_ACCESS;
mongoose.connect(url, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
});
