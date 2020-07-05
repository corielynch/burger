// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection(process.env.JAWSDB_URL || {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "P@$$word",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

// Export connection for our ORM to use.
module.exports = connection;