const mongoose = require('mongoose');

const url = process.env.MONGO_DB_CONNECTION_STRING;
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to db');
  },
);
