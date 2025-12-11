const express = require('express');
const router = express.Router();
const { getAllPosts, createPost } = require('../controllers/posts.controller');

router.get('/', getAllPosts);      // GET all posts
router.post('/', createPost);      // CREATE a new post

module.exports = router;
