const jwt = require('jsonwebtoken');
const generateToken = require('../utils/generateToken');

// @desc    AdminLogin
// @route   POST /api/v1/auth/admin/login
// @access  Private
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  if (!email.includes('@adypu.edu.in')) {
    return res.status(400).json({ msg: 'Invalid credentails!' });
  }

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(400).json({ msg: 'Invalid credentials' });
  }
  const { accessToken, refreshToken } = generateToken('admin');
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });
  return res.status(200).json({ accessToken });
};

// @desc    Logout
// @route   GET /api/v1/auth/logout
// @access  Public
exports.logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(203).json({ message: 'No content' });
  }

  res.clearCookie('refreshToken');

  return res.status(200).json({ message: 'Logout!' });
};

// @desc    Refresh Token
// @route   GET /api/v1/auth/refresh
// @access  Public
exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json({ error: 'Unauthorized (No token found!)' });
  }
  const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  if (!decoded) {
    return res.status(401).json({ error: 'Unauthorized (Invalid token!)' });
  }
  const { accessToken } = generateToken(decoded.role);
  return res.status(200).json({ accessToken });
};

// @desc    UserLogin
// @route   POST /api/v1/auth/login
// @access  Public
exports.userLogin = async (req, res) => {};
