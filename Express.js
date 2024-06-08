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
