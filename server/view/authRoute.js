import express from 'express';
import { adminLogin, userLogin, logout } from '../controller/authController.js';

const router = express.Router();

router.use((req, res, next) => {
  console.log('Auth Route!');
  next();
});

router.route('/admin/login').post(adminLogin);

router.route('/login').post(userLogin);

router.route('/').get(logout);

export default router;
