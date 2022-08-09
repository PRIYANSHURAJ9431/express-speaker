"use strict";

const properties = require("../package.json");
const distance = require("../service/distance");

var controllers = {
  about: (req, res) => {
    var aboutInfo = {
      name: properties.name,
      version: properties.version,
    };
    res.json(aboutInfo);
  },

  getDistance: (req, res) => {
    console.log(req.params);
    res.json({
      hi: req.params.zipcode1,
    });
    // distance.find(req, res, (err, dist) => {
    //   if (err) res.send(err);
    //   res.json(dist);
    // });
  },
};

module.exports = controllers;
