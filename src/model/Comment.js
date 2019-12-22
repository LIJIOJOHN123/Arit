const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId
  },
  post: {
    type: String
  },
  title: {
    type: String
  },
  comment: { type: String },
  reply: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId
      },
      reply: {
        type: String
      }
    }
  ]
});
const Commet = mongoose.model("Comment", CommentSchema);
module.exports = Commet;
