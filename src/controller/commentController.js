const Comment = require("../model/Comment");

exports.addComment = async (req, res) => {
  try {
    const newComment = {
      user: req.user._id,
      post: req.params.id,
      title: req.body.title,
      comment: req.body.comment
    };
    const comment = new Comment(newComment);
    await comment.save();
    res.send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getComment = async (req, res) => {
  try {
    const comments = await Comment.find({ user: req.user._id });
    res.send(comments);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findOne({ _id: req.params.id });
    if (!comment) {
      res.status(404).send("Comment not exists");
    }
    res.send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.editCommentById = async (req, res) => {
  try {
    const comment = await Comment.findOne({ _id: req.params.id });
    if (!comment) {
      res.status(404).send("Comment not exists");
    }
    const updates = Object.keys(req.body);
    updates.map(update => (comment[update] = req.body[update]));
    await comment.save();
    res.send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
};
// exports.addReply= async(req,res)=>{
//  const comment = await Comment.fiOn
// }
