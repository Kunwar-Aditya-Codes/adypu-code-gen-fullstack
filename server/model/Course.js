import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  branch: {
    type: String,
  },

  year: {
    type: Number,
  },

  semester: {
    type: Number,
  },

  subject: {
    type: String,
  },

  code: {
    type: String,
  },
});

export default mongoose.model('course', courseSchema);
