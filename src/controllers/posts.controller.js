// In-memory posts storage
let posts = [];

// GET all posts
const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: posts
  });
};

// CREATE a new post
const createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      success: false,
      message: "Title and content are required"
    });
  }

  const newPost = { title, content };
  posts.push(newPost); // store in memory

  res.status(201).json({
    success: true,
    data: newPost
  });
};

module.exports = { getAllPosts, createPost };
