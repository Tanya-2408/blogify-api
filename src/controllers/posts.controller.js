// src/controllers/posts.controller.js

// Controller: Fetch all posts
export const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      message: "All posts fetched successfully"
      // Later, replace this with actual posts array from the database
      // posts: [...]
    }
  });
};

// Controller: Fetch a single post by ID
export const getPostById = (req, res) => {
  const { postId } = req.params;

  res.status(200).json({
    success: true,
    data: {
      postId: postId
      // Later, replace this with actual post data when DB is added
      // post: {...}
    }
  });
};
