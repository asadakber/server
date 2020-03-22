const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://admin:admin123@ds055732.mlab.com:55732/datas';

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));