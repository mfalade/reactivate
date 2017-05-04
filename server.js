require('dotenv').config();

BASE_DIR = `${__dirname}/app/`;
express = require('express');
mongoose = require('mongoose');
config = require(`${BASE_DIR}/config`);

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const baseRouter = require(`${BASE_DIR}/routes`);

mongoose.connect(config.database.url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, '.. DB Connection Failed'));
db.on('open', () => { console.log('.. Connected to DB') });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', baseRouter);

app.listen(config.port, () => {
    console.log(`.. App started on port ${config.port}`);
});