import express from 'express';
import {
  createCourse,
  getAllCourses,
  searchCourse,
} from '../controller/courseController.js';

const router = express.Router();

router.use((req, res, next) => {
  console.log('Course Route');
  next();
});

router.route('/').post(createCourse);

router.route('/fetch').get(getAllCourses);

router.route('/search').get(searchCourse);

export default router;
