const express = require("express");
const router = express.Router();

// Import controllers
const postController = require("../controllers/posts.controller");

// GET /api/v1/posts → All posts
router.get("/", postController.getAllPosts);

// GET /api/v1/posts/:postId → Single post by ID
router.get("/:postId", postController.getPostById);

module.exports = router;
