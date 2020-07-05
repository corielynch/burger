// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cbController) {
      orm.selectAll ("burgers", function(data){
        cbController(data)  
      })  
    },
    insertOne: function(columns, values, cbController) {
      orm.insertOne("burgers", columns, values, function(data) {
        cbController(data);
      });
    },
    updateOne: function(objColVals, condition, cbController) {
      orm.updateOne("burgers", objColVals, condition, function(data) {
        cbController(data);
      });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;