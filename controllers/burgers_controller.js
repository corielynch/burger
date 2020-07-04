var express = require("express");

const router = require("express").Router();

// Import the model (cat.js) to use its database functions.
let burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function (data){
        res.render("index", {burgerData: data})
    })
})

router.post("/api/burgers", function
(req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
      ], function(data) {
        // Send back the ID of the new quote
        // res.json({ id: data.insertId });
      });
    });

// Export routes for server.js to use.
module.exports = router;