// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/social_media_db', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// Routes
app.use('/api/posts', require('./routes/posts'));
app.use('/api/users', require('./routes/users'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new post
router.post('/', async (req, res) => {
  const post = new Post({
    content: req.body.content,
    author: req.body.author
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

