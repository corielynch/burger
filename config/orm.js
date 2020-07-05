// Import MySQL connection.
var connection = require("./connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}


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

      connection.query(queryString, values, function(err, data) {
        if (err) {
          throw (err);
        }
        cbController(data);
        
      });
    },

    updateOne: function(tablename, objColVals, condition, cbController) {

      console.log("--- THIS IS objColVals " , objColVals);
      console.log(" ----> THIS IS CONDITION" + condition);

      var queryString = "UPDATE " + tablename;

      queryString += " SET ";
      queryString += objToSql(objColVals.devoured);

      //queryString += objColVals
      queryString += " WHERE ";
      queryString += condition;

      console.log("This is the NEW query string " + queryString);

      connection.query(queryString, function(err, data) {
        if (err) {
          throw err;
        }

        cbController(data);
      });
    }
}
// Export the orm object for the model (burger.js).
module.exports = orm;