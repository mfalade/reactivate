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

exports.validateUser = (user) => {
  return bcrypt.compare(user.submittedPassword, user.password).then(res => {
    return new Promise((resolve, reject) => {
      if (res) {
        resolve(user);
      } else {
        reject('Username or Password Incorrect.');
      }
    });
  });
}

exports.generateToken = user => {
  return new Promise((resolve, reject) => {
    const data = {
      username: user.username,
      isVerified: user.isVerified,
      lastLoggedInAt: new Date(),
      isAdmin: false
    }
    const token = jwt.sign(data, config.secret, { expiresIn: 10 });
    resolve(token);
  })
}