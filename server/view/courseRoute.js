const express = require('express');
const {
  createCourse,
  getAllCourses,
  searchCourse,
} = require('../controller/courseController');

const router = express.Router();

router.use((req, res, next) => {
  console.log('Course Route');
  next();
});

router.route('/').post(createCourse);

router.route('/fetch').get(getAllCourses);

router.route('/search').get(searchCourse);

module.exports = router;
