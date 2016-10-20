var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '123',
  database: 'spookyCelluloid'
});

connection.connect();

module.exports = connection;