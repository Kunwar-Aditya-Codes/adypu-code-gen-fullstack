import Course from '../model/Course.js';

// @desc    Create a course
// @route   POST /api/v1/courses
// @access  Private - Admin
export const createCourse = async (req, res) => {
  const { branch, year, semester, subject, code } = req.body;

  if (!branch || !year || !semester || !subject || !code) {
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
    code,
  });

  await newCourse.save();

  res.status(201).json({ msg: 'Course created successfully' });
};

// @desc    Get all courses
// @route   GET /api/v1/courses
// @access  Public
export const getAllCourses = async (req, res) => {
  const courses = await Course.find().lean().exec();
  res.status(200).json({ courses });
};

// @desc    Search for a course
// @route   GET /api/v1/courses/search
// @access  Public
export const searchCourse = async (req, res) => {
  const { subject } = req.query;

  if (!subject) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  const course = await Course.find({
    subject: { $regex: subject, $options: 'i' },
  })
    .lean()
    .exec();

  if (!course) {
    return res.status(203);
  }

  res.status(200).json({ course });
};
