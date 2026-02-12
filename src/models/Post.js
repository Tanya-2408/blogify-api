const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    category: String,

    // ⭐ REQUIRED FOR ANALYTICS
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft"
    },

    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
