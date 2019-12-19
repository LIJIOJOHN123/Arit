const Channel = require("../model/Channel");

exports.createChannel = async (req, res) => {
  const newChannel = {
    user: req.user._id,
    channel: req.body.channel,
    channelName: req.body.channelName,
    introduction: req.body.introduction,
    language: req.body.language
  };
  try {
    const channel = new Channel(newChannel);
    await channel.save();
    res.send(channel);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getChannel = async (req, res) => {
  try {
    const channel = await Channel.find({ user: req.user._id });
    res.send(channel);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getOneChannel = async (req, res) => {
  try {
    const channel = await Channel.findOne({
      user: req.user._id,
      _id: req.params.id
    });
    if (!channel) {
      return res.status(500).send("Channel not exists");
    }
    res.send(channel);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.editChannel = async (req, res) => {
  try {
    const udpates = Object.keys(req.body);
    const channel = await Channel.findOne({
      user: req.user._id,
      _id: req.params.id
    });
    udpates.map(update => (channel[update] = req.body[update]));
    await channel.save();
    res.send(channel);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.deleteChannel = async (req, res) => {
  try {
    const channel = await Channel.findOne({
      user: req.user._id,
      _id: req.params.id
    });
    channel.status = "blocked";
    await channel.save();
    res.send(channel);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.likeChannel = async (req, res) => {
  try {
    const channel = await Channel.findOne({
      user: req.user._id,
      _id: req.params.id
    });
    if (
      channel.likes.filter(
        like => like.user.toString() === req.user._id.toString()
      ).length > 0
    ) {
      return res.status(404).send("You have already liked this channel");
    }
    channel.likes.unshift({ user: req.user._id });
    await channel.save();
    res.send(channel);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.unlikeChannel = async (req, res) => {
  try {
    const channel = await Channel.findOne({
      user: req.user._id,
      _id: req.params.id
    });
    if (
      channel.likes.filter(
        like => like.user.toString() === req.user._id.toString()
      ).length === 0
    ) {
      return res.status(404).send("You have not liked this channel");
    }
    const index = channel.likes.findIndex(
      like => like.user.toString() === req.user._id.toString()
    );
    channel.likes.splice(index, 1);
    await channel.save();
    res.send(channel);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.shareChannel = async (req, res) => {
  try {
    const channel = await Channel.findOne({
      user: req.user._id,
      _id: req.params.id
    });
    if (
      channel.shares.filter(
        share => share.user.toString() === req.user._id.toString()
      ).length > 0
    ) {
      return res.status(404).send("You have already shared this channel");
    }
    channel.shares.unshift({ user: req.user._id });
    await channel.save();
    res.send(channel);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.unshareChannel = async (req, res) => {
  try {
    const channel = await Channel.findOne({
      user: req.user._id,
      _id: req.params.id
    });
    if (
      channel.shares.filter(
        share => share.user.toString() === req.user._id.toString()
      ).length === 0
    ) {
      return res.status(404).send("You have not liked this channel");
    }
    const index = channel.likes.findIndex(
      share => share.user.toString() === req.user._id.toString()
    );
    channel.shares.splice(index, 1);
    await channel.save();
    res.send(channel);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.subscribeChannel = async (req, res) => {
  try {
    const channel = await Channel.findOne({
      user: req.user._id,
      _id: req.params.id
    });
    if (
      channel.subscribes.filter(
        subscribe => subscribe.user.toString() === req.user._id.toString()
      ).length > 0
    ) {
      return res.status(404).send("You have already shared this channel");
    }
    channel.subscribes.unshift({ user: req.user._id });
    await channel.save();
    res.send(channel);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.unsubscribeChannel = async (req, res) => {
  try {
    const channel = await Channel.findOne({
      user: req.user._id,
      _id: req.params.id
    });
    if (
      channel.subscribes.filter(
        subscribe => subscribe.user.toString() === req.user._id.toString()
      ).length === 0
    ) {
      return res.status(404).send("You have not liked this channel");
    }
    const index = channel.subscribes.findIndex(
      subscribe => subscribe.user.toString() === req.user._id.toString()
    );
    channel.subscribes.splice(index, 1);
    await channel.save();
    res.send(channel);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getAllChannels = async (req, res) => {
  try {
    const channels = await Channel.find();
    res.send(channels);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.getByIdChannels = async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id);
    if (!channel) {
      res.status(404).send("This channel not exist");
    }
    res.send(channel);
  } catch (error) {
    res.status(500).send(Error);
  }
};
