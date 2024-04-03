const mongoose = require('mongoose');
const db = mongoose.connect(process.env.DB);
const conn = mongoose.connection;
conn.on('error', err => { console.error(err) })
conn.once('open', () => {
  console.log('Connected to Database')
});

module.exports = db;