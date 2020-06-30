const router = require("express").Router();

// Import the model (cat.js) to use its database functions.
let burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function (data){
        
        res.render("index", {burgerData: data})
    })
})


// Export routes for server.js to use.
module.exports = router;