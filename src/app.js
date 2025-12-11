const express = require('express');
const cors = require('cors');
const postsRouter = require('./routes/posts.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // parse JSON bodies

// Routes
app.use('/api/posts', postsRouter);

// Health check
app.get('/', (req, res) => {
  res.send('Blogify API is running!');
});

module.exports = app;
