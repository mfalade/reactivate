const authenticationRouter = express.Router();
const loginHandler = require('./login');
const registerationHandler = require('./register');

authenticationRouter.route('/login')
    .post(loginHandler.loginUser);

authenticationRouter.route('/register')
    .post(registerationHandler.createUser)


module.exports = authenticationRouter;