const jwt = require('jsonwebtoken');

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

  const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET);

  res.cookie('jwt', token, {});

  res.status(200).json({ msg: 'Login Success!' });
};

// ! Complete Later
// @desc    UserLogin
// @route   POST /api/v1/auth/login
// @access  Public
exports.userLogin = async (req, res) => {};

// @desc    Logout
// @route   GET /api/v1/auth/logout
// @access  Public
exports.logout = async (req, res) => {
  res.clearCookie();

  return res.sendStatus(203);
};
