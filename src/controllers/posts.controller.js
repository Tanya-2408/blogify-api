// src/controllers/posts.controller.js

// Controller #1 — Get ALL posts
exports.getAllPosts = (req, res) => {
  res.status(200).json({
    message: "Route handled by postController.getAllPosts",
  });
};

// Controller #2 — Get a post by ID
exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId; // capture ID from URL

    res.status(200).json({
      message: "Fetching data for post with ID: " + postId,
      postId,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};
