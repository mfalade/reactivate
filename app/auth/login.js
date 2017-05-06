const User = require(`${BASE_DIR}/models/user.model`);
const authUtils = require(`${BASE_DIR}/auth/authUtils`);

const authenticate = entry => {
  return new Promise((resolve, reject) => {
    User.findOne({username: entry.username}, (err, user) => {
      if (err) reject(err);
      if (!user) {
        reject('Username or Password Incorrect.');
      } else {
        authUtils.validatePassword(entry.password, user.password).then(res => {
          if (res) {
            resolve(user);
          } else {
            reject('Username or Password Incorrect.');
          }
        })
      }
    })
  })
}


exports.loginUser = (req, res) => {
  authenticate(req.body)
    .then(authUtils.generateToken)
    .then(token => {
      res.status(200).send({token: token});
    }).catch(err => {
      return res.status(401).send(err)
    });
}