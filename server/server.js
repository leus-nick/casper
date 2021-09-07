const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('dotenv').config();
require('./utils/connectdb');
require('./strategies/JWTStrategy');
require('./strategies/LocalStrategy');
require('./authenticate');
const userRouter = require('./routes/userRoutes');

const port = process.env.PORT || 8081;
const app = express();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

const whitelist = process.env.WHITELISTED_DOMAINS ? process.env.WHITELISTED_DOMAINS.split(',') : [];

const corsOptions = {
  origin(origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(passport.initialize({}));
app.use('/users', userRouter);
app.get('/', (req, res) => {
  res.send({ status: 'success' });
});

app.listen(port, () => {
  console.log('App started at port:', port);
});
