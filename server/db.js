const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Blog');

const UserSchema = new mongoose.Schema({
  name: String,
  pwd: String
});

const ArticleSchema = new mongoose.Schema({
  title: String,
  state: String,
  content: String
});

const Models = {
  User: mongoose.model('User', UserSchema),
  Articles: mongoose.model('Post', ArticleSchema)
};

module.exports = Models;
