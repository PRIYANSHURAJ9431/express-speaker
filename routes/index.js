const express = require("express");
const router = express.Router();

const speakerRoute = require("./speaker");

module.exports = (params) => {
  const { filterService } = params;

  // const filterService = params.filterService;

  // console.log(params);

  router.get("/filter", async (req, res, next) => {
    try {
      const d1 = await filterService.filterName();
      res.json(d1);
    } catch (err) {
      return next(err);
    }
  });

  router.use("/speaker", speakerRoute());

  return router;
};
