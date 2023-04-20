const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  branch: {
    type: String,
  },

  year: {
    type: String,
  },

  program: {
    type: String,
  },

  semester: {
    type: String,
  },

  subject: {
    type: String,
  },

  code: {
    type: String,
  },
});

module.exports = mongoose.model('course', courseSchema);
