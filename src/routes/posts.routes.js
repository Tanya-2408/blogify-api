const express = require("express");
const router = express.Router();

// GET /api/v1/posts → All posts
router.get("/", (req, res) => {
  res.json({
    message: "All posts fetched successfully",
    posts: [],
  });
});

// GET /api/v1/posts/:postId → Single post
router.get("/:postId", (req, res) => {
  const { postId } = req.params;

  res.json({
    message: "Fetching data for post with ID: " + postId,
    postId,
  });
});

module.exports = router;
