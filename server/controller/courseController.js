const Course = require('../model/Course');

// @desc    Create a course
// @route   POST /api/v1/courses
// @access  Private - Admin
exports.createCourse = async (req, res) => {
  const role = req.role;

  if (role !== 'admin') {
    return res.status(401).json({ msg: 'Unauthorized' });
  }

  const { branch, year, semester, subject, code, program, college } = req.body;

  if (
    !branch ||
    !year ||
    !semester ||
    !subject ||
    !code ||
    !program ||
    !college
  ) {
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
    college,
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
