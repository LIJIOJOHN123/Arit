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
