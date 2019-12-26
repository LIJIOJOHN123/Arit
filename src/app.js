const express = require("express");
const ArticleParser = require("article-parser");
const cors = require("cors");

require("./config/database");
const app = express();

app.use(express.json());
app.use(cors());

//router
const router = require("./router");

app.use("/api", router);

app.listen(8000, () => {
  console.log("You app is running port 8000");
});
