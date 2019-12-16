const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const channelSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    channel: {
      type: String,
      required: true
    },
    channelName: {
      type: String,
      required: true,
      unique: true
    },
    introduction: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    likes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      }
    ],
    shares: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      }
    ],
    subscribes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      }
    ],
    rates: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        },
        comment: {
          type: String,
          required: true
        }
      }
    ],
    status: {
      type: String,
      default: "active",
      enum: ["active", "blocked"]
    }
  },
  { timestamps: true }
);
const Channel = mongoose.model("Channel", channelSchema);

module.exports = Channel;
