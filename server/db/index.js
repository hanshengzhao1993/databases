var mysql = require('mysql');
var fs = require('fs');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

dbConnection.connect( function (err) {
  if (err) {
    console.log('error connecting to DB', err);
    throw err;
  }
  console.log('Connected');
});

module.exports.dbConnection = dbConnection;