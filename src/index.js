const express = require('express');
const app = express();
const PORT = 3000;

// Import your router
const postRouter = require('./routes/posts.routes');

// Home route
app.get('/', (req, res) => {
  res.send("Blogify API is running!");
});

// Mount your router
app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
