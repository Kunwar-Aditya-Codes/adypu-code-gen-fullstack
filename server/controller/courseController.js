const Course = require('../model/Course');

// @desc    Create a course
// @route   POST /api/v1/courses
// @access  Private - Admin
exports.createCourse = async (req, res) => {
  const { branch, year, semester, subject, code, program } = req.body;

  if (!branch || !year || !semester || !subject || !code || !program) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  const foundSubject = await Course.findOne({ subject }).lean().exec();

  if (foundSubject) {
    return res.status(400).json({ msg: 'Subject already exists' });
  }

  const newCourse = new Course({
    branch,
    year,
    semester,
    subject,
    program,
    code,
  });

  await newCourse.save();

  res.status(201).json({ msg: 'Course created successfully' });
};

// @desc    Get all courses
// @route   GET /api/v1/courses
// @access  Public
exports.getAllCourses = async (req, res) => {
  const courses = await Course.find().lean().exec();
  res.status(200).json({ courses });
};

// @desc    Search for a course
// @route   GET /api/v1/courses/search
// @access  Public
exports.searchCourse = async (req, res) => {
  const { query } = req.query;

  const courses = await Course.find({
    $or: [
      { branch: { $regex: query, $options: 'i' } },
      { year: { $regex: query, $options: 'i' } },
      { semester: { $regex: query, $options: 'i' } },
      { subject: { $regex: query, $options: 'i' } },
      { code: { $regex: query, $options: 'i' } },
      { program: { $regex: query, $options: 'i' } },
    ],
  })
    .lean()
    .exec();

  res.status(200).json({ courses });
};
