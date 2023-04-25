const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    college: {
      type: String,
    },

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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('course', courseSchema);
