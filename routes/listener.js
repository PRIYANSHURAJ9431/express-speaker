const express = require("express");
// const router = express.Router();

module.exports = (app) => {
  //   router.get("/", (req, res) => {
  //     res.send("speaker");
  //   });

  //   router.get("/:name", (req, res) => {
  //     res.send(req.params.name);
  //   });

  //   return router;

  app.get("/listen", (req, res) => {
    res.send("listened");
  });
};
