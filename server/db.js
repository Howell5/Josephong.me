const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Blog');

const UserSchema = new mongoose.Schema({
  name: String,
  pwd: String
});

const ArticleSchema = new mongoose.Schema({
  title: String,
  id: String,
  date: Date,
  state: String
});

const Models = {
  User: mongoose.Model('User', UserSchema),
  Article: mongoose.Model('User', ArticleSchema)
};

module.export = Models;
