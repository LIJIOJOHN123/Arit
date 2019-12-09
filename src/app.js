const express = require("express");
require("./config/database");
const app = express();

app.use(express.json());

//router
const router = require("./router");

app.use("/api", router);

app.listen(8000, () => {
  console.log("You app is running port 8000");
});
