import mongoose from 'mongoose';

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

export default mongoose.model('course', courseSchema);
