const jwt = require('jsonwebtoken');

const generateToken = (role) => {
  const accessToken = jwt.sign({ role }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1d',
  });

  const refreshToken = jwt.sign({ role }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d',
  });

  return { accessToken, refreshToken };
};

module.exports = generateToken;
