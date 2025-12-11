const express = require('express');
const router = express.Router();

// Import resource routers
const postsRouter = require('./posts.routes');

// Mount the posts router
router.use('/posts', postsRouter);

module.exports = router;
