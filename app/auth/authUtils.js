const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.generateSalt = rounds => {
  return bcrypt.genSaltSync(rounds)
}


exports.hashPassword = (password, salt) => {
  return bcrypt.hashSync(password, salt);
}


exports.validatePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
}


exports.generateToken = user => {
  return new Promise((resolve, reject) => {
    const data = {
      username: user.username,
      isVerified: user.isVerified,
      lastLoggedInAt: new Date()
    }
    const token = jwt.sign(data, config.secret, { expiresIn: 10 });
    resolve(token);
  })
}