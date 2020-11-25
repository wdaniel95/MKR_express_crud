const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/tasks';


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', _ => console.log('database connected in', URI));

db.on('error', error => console.log(error));