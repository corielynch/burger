// Import MySQL connection.
var connection = require("./connection.js");


var orm = {
   selectAll: function (tablename, cbModel) {
       connection.query("SELECT * FROM ??", tablename, function(err, data){
         cbModel(data)
       })  
     },

    insertOne: function (tablename, columns, values, cbController) {
      var queryString = "INSERT INTO " + tablename;

      queryString += " (";
      queryString += columns;
      queryString += ")";
      queryString += " VALUES (' ";
      queryString += values;
      queryString += " ') ";

      console.log("THIS IS QUERY STRING " + queryString);


      connection.query(queryString, values, function(err, data) {
        if (err) {
          throw (err);
        }
        console.log("BEFORE DATA " + data);
        cbController(data);
        console.log("AFTER DATA " + data);

      });
    },

    // updateOne: function(tablename, columns, values, cbModel) {
    // }
}
// Export the orm object for the model (burger.js).
module.exports = orm;