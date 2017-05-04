const bcrypt = require('bcrypt');
const uniqid = require('uniqid');

const userSchema = mongoose.Schema({ 
    username: String,
    salt: String,
    password: String,
    isVerified: {type: Boolean, default: false}, 
    createdOn: {type: Date, default: Date.now},
    verificationUrl: String
});

userSchema.pre('save', function(next) {
  const uniqueId = uniqid(config.appName)
  this.salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, this.salt);
  this.verificationUrl = `${config.host}/auth/verify/?verificationCode=${uniqueId}&username=${this.username}`;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;