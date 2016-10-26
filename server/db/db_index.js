var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'yes',
  database: 'spookyCelluloid'
});

connection.connect();

module.exports = connection;