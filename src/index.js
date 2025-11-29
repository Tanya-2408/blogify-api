const express = require("express");
const app = express();

app.use(express.json());

const postRoutes = require("./routes/posts.routes");
app.use("/api/v1/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Blogify API is running!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
