const jwt = require('jsonwebtoken');
const config = require('config');

var passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function (req, res, next) {
  //Get token from header

  const token = req.header('x-auth-token');

  // Check if token is not there

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

// Google oauth strategy

// passport.use(
//   'googleToken',
//   new GoogleStrategy(
//     {
//       clientID:
//         '259453469474-l9m2i41oe12lp3ful5rb0lvhddfpepcn.apps.googleusercontent.com',
//       clientSecret: '-KAj17nKS5ObUS5_nnSAaPlY',
//       callbackURL: 'http://localhost:5000/api/auth/google',
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       console.log('accessToken', accessToken);
//       console.log('refreshToken', refreshToken);
//       console.log('profile', profile);
//     }
//   )
// );
