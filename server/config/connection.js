const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/horoscope',
  // mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/horoscope'),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;