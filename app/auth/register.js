const User = require(`${BASE_DIR}/models/user.model`);

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, newUser) => {
    if (err) {
      if (err.code == 11000) {
        return res.status(400).send(`A user with the username '${user.username}' exists.`);
      }
      return res.status(400).send({err: err});
    }
    const verificationUrl = `${config.host}/auth/verify/?verificationCode=${user.uniqueId}&username=${user.username}`;
    return res.status(201).send({ message: 'Account creation successful' });
  });
}