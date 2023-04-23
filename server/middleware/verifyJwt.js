const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next) => {
  const bearerToken = req.headers['authorization'];

  if (!bearerToken) {
    return res
      .status(401)
      .json({ msg: 'No bearerToken, authorization denied' });
  }

  const token = bearerToken.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decoded) {
      return res
        .status(401)
        .json({ msg: 'Token verification failed, authorization denied' });
    }

    req.role = decoded.role;
    next();
  } catch (err) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};

module.exports = verifyJwt;
