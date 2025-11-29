// src/controllers/posts.controller.js

// Existing exports...
// Add this new function below:
exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;   // <-- Capture ID from URL

    res.status(200).json({
      message: "Fetching data for post with ID: " + postId,
      postId,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};
