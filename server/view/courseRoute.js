const express = require('express');
const {
  createCourse,
  getAllCourses,
  searchCourse,
} = require('../controller/courseController');
const verifyJwt = require('../middleware/verifyJwt');

const router = express.Router();

router.use((req, res, next) => {
  console.log('Course Route');
  next();
});

router.route('/').post(verifyJwt, createCourse);

router.route('/fetch').get(getAllCourses);

module.exports = router;
