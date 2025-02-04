const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  image: String,
  content: {
    type: String,
    required: true
  }
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;
