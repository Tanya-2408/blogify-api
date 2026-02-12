const mongoose = require('mongoose');
const Post = require('../models/Post');
const { encodeCursor, decodeCursor } = require('../utils/cursor');

exports.getAllPosts = async (req, res, next) => {
  try {
    const limit = Math.min(parseInt(req.query.limit) || 10, 100);
    const encodedCursor = req.query.cursor;

    let cursor = null;
    if (encodedCursor) {
      cursor = new mongoose.Types.ObjectId(decodeCursor(encodedCursor));
    }

    const query = cursor ? { _id: { $lt: cursor } } : {};

    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(limit + 1)
      .lean();


    const hasMore = posts.length > limit;
    if (hasMore) posts.pop();

    const nextCursor =
      hasMore && posts.length > 0
        ? encodeCursor(posts[posts.length - 1]._id)
        : null;

    res.status(200).json({
      success: true,
      data: posts,
      pagination: {
        nextCursor,
        hasMore,
        limit,
        count: posts.length
      }
    });
  } catch (error) {
    next(error);
  }
};
