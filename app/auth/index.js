const authenticationRouter = express.Router();
const User = require(`${BASE_DIR}/models/user.model`);

authenticationRouter.route('/login')
    .post((req, res) => {
        console.log('We seee ya');
        res.send('We will sign you up in a bit');
    });


authenticationRouter.route('/register')
    .post((req, res) => {
        const user = new User(req.body);
        user.save((err, newUser) => {
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(201).send({message: 'Account creation successful'});
        });
    })


module.exports = authenticationRouter;