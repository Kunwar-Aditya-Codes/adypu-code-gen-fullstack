const express = require('express');
const {
  adminLogin,
  userLogin,
  logout,
} = require('../controller/authController');

const router = express.Router();

router.use((req, res, next) => {
  console.log('Auth Route!');
  next();
});

router.route('/admin/login').post(adminLogin);

router.route('/login').post(userLogin);

router.route('/').get(logout);

module.exports = router;
