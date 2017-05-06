const uniqid = require('uniqid');
const authUtils = require(`${BASE_DIR}/auth/authUtils`);

const userSchema = mongoose.Schema({ 
    salt: String,
    username: {type: String, unique: true},
    password: String,
    isVerified: {type: Boolean, default: false}, 
    createdOn: {type: Date, default: Date.now},
    verificationCode: String
});

userSchema.pre('save', function(next) {
  this.salt = authUtils.generateSalt(10);
  this.password = authUtils.hashPassword(this.password, this.salt);
  this.verificationCode = uniqid(config.appName);

  next();
});

userSchema.statics.compileUserInfo = function(user) {
  const self = this;
  const username = user.username;
  const submittedPassword = user.password;

  return new Promise((resolve, reject) => {
    self.findOne({username: username}, function(err, user) {
      if (err) reject(err);
      if (user) {
        const userInfo = Object.assign(user, {submittedPassword: submittedPassword});
        resolve(userInfo);
      } else {
        reject('Username or Password Incorrect.');
      }
    });
  });
}

const User = mongoose.model('User', userSchema);

module.exports = User;