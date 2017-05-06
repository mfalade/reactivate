const User = require(`${BASE_DIR}/models/user.model`);
const authUtils = require(`${BASE_DIR}/auth/authUtils`);

exports.loginUser = (req, res) => {
  User.compileUserInfo(req.body)
    .then(authUtils.validateUser)
    .then(authUtils.generateToken)
    .then(token => {
      res.status(200).send({token: token});
    }).catch(err => {
      return res.status(401).send(err)
    });
}