// Import MySQL connection.
var connection = require("./connection.js");

// function selectAll()
// function insertOne()
// function updateOne()
 
 


var orm = {
   selectAll: function (tablename, cbModel) {
       connection.query("select * from ??", tablename, function(err, data){
         cbModel(data)
       })  
     },
    insertOne: function (tablename, columns, values, cbModel) {

    },
    updateOne: function(tablename, columns, values, cbModel) {

    }
}
// Export the orm object for the model (burger.js).
module.exports = orm;