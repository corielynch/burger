var express = require("express");

const router = require("express").Router();

// Import the model (cat.js) to use its database functions.
let burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function (data){
        res.render("index", {burgerData: data})
    })
});

router.post("/api/burgers", function
(req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
      ], function(result) {
        // Send back the ID of the new quote
        const newBurgerId = result.insertId;
        res.json({ id: result.newBurgerId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(data) {
      if (data.changedDevoured == 1) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use.
module.exports = router;