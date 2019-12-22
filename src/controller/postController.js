const Post = require("../model/Post");
const { extract } = require("article-parser");

exports.createPost = async (req, res) => {
  try {
    const newPost = {
      user: req.user._id,
      channel: req.params.id,
      link: req.body.link
    };
    const post = new Post(newPost);
    const data = await extract(req.body.link);
    if (!data) {
      return res.status(404).send("Please check your url");
    }
    post.postDetails.push(data);
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getAllPost = async (req, res) => {
  try {
    const post = Post.find({
      user: req.user._id,
      channel: req.params.id
    });
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getPostById = async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send("Post not exists");
    }
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.likePost = async (req, res) => {
  try {
    const post = await Post.findOne({
      user: req.user._id,
      _id: req.params.id
    });
    if (
      post.likes.filter(
        like => like.user.toString() === req.user._id.toString()
      ).length > 0
    ) {
      return res.status(404).send("You have already liked this post");
    }
    post.likes.unshift({ user: req.user._id });
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.unlikePost = async (req, res) => {
  try {
    const post = await Post.findOne({
      user: req.user._id,
      _id: req.params.id
    });
    if (
      post.likes.filter(
        like => like.user.toString() === req.user._id.toString()
      ).length === 0
    ) {
      return res.status(404).send("You have not liked this post");
    }
    const index = post.likes.findIndex(
      like => like.user.toString() === req.user._id.toString()
    );
    post.likes.splice(index, 1);
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.sharePost = async (req, res) => {
  try {
    const post = await Post.findOne({
      user: req.user._id,
      _id: req.params.id
    });
    if (
      post.shares.filter(
        share => share.user.toString() === req.user._id.toString()
      ).length > 0
    ) {
      return res.status(404).send("You have already shared this post");
    }
    post.shares.unshift({ user: req.user._id });
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.unsharePost = async (req, res) => {
  try {
    const post = await Post.findOne({
      user: req.user._id,
      _id: req.params.id
    });
    if (
      post.shares.filter(
        share => share.user.toString() === req.user._id.toString()
      ).length === 0
    ) {
      return res.status(404).send("You have not liked this post");
    }
    const index = post.likes.findIndex(
      share => share.user.toString() === req.user._id.toString()
    );
    post.shares.splice(index, 1);
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getPostsById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send("Post not exists");
    }
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};
